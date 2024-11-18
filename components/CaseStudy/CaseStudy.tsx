"use client";
import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { caseStudies } from '@/data/data';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function CaseStudy() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const autoScroll = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    const autoScrollInterval = setInterval(autoScroll, 3000);
    return () => clearInterval(autoScrollInterval);
  }, [emblaApi, autoScroll, onSelect]);

  return (
    <section className="py-4 sm:py-12 md:py-20 px-3 sm:px-12 md:px-20">
      <div className="container mx-auto px-4 md:px-12">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-8 md:mb-12 text-center">
          Case Studies
        </h2>
        <div className="flex flex-col items-center">

          <div ref={emblaRef} className="w-full overflow-hidden">
            <motion.div
              className="flex"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              {caseStudies.map((study) => (
                <motion.div
                  className="flex-[0_0_100%] p-4"
                  key={study.id}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="shadow-lg h-80">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row">
                        
                        <div className="md:w-1/3 p-2">
                          <Image
                            src={study.image}
                            alt={study.title}
                            className="rounded-lg object-cover"
                            width={300}
                            height={300}
                            priority
                          />
                        </div>
                       
                        <div className="md:w-2/3 p-4 md:p-6">
                          <p className="text-sm text-gray-500 mb-2">
                            {study.category}
                          </p>
                          <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
                            {study.title}
                          </h3>
                          <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
                            {study.description}
                          </p>
                          {/* <Button
                            variant="outline"
                            className="py-2 px-4 h-auto font-semibold bg-blue-200 hover:bg-blue-400 flex items-center"
                          >
                            Read More <ArrowRight className="ml-2 h-4 w-4" />
                          </Button> */}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="flex justify-center mt-6">
            {caseStudies.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                className={`mx-1 ${
                  selectedIndex === index
                    ? "bg-primary text-primary-foreground"
                    : ""
                }`}
                onClick={() => emblaApi?.scrollTo(index)}
              >
                {index + 1}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
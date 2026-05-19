/* eslint-disable react/no-unescaped-entities */
"use client"
import React from 'react';
import { Button } from '@/components/ui/button';
import { HiCode, HiArrowRight } from 'react-icons/hi';
import { config } from '@/config';
import Link from 'next/link';
import { BackgroundPresets } from '@/components/ui/background-effects';
import { motion } from 'framer-motion';
import SkillsShowcase from './SkillsShowcase';

const containerAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemAnimation = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const textAnimation = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const NeumorphicCard = ({ children, className }) => (
  <motion.div
    variants={itemAnimation}
    className={`rounded-[30px] bg-[#212121] shadow-[15px_15px_30px_rgb(15,15,15),-15px_-15px_30px_rgb(45,45,45)] p-8 md:p-12 border border-white/5 ${className}`}
  >
    {children}
  </motion.div>
);

const HeroSection = () => {
  return (
    <section className="min-h-[calc(100vh-140px)] flex items-center justify-center relative py-12">
      <BackgroundPresets.Minimal />

      <div className="container mx-auto px-6">
        <motion.div
          variants={containerAnimation}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto relative z-10"
        >
          {/* Left Card: Identity & Action */}
          <NeumorphicCard className="flex flex-col justify-center items-center text-center space-y-8 min-h-[350px]">
            <motion.div
              variants={itemAnimation}
              className="inline-flex items-center space-x-2 mirror-effect mirror-glow px-4 py-2 rounded-full text-primary bg-black/20"
            >
              <HiCode className="w-5 h-5" />
              <span className="text-sm font-medium">Welcome to Zenith</span>
            </motion.div>

            <motion.h1
              variants={itemAnimation}
              className="text-5xl md:text-7xl font-bold tracking-tight"
            >
              <motion.span
                variants={textAnimation}
                className="block text-primary"
              >
                {config.developer.name}
              </motion.span>
            </motion.h1>

            <motion.div variants={itemAnimation}>
              <Link href={"/projects"}>
                <Button
                  variant="expandIcon"
                  Icon={HiArrowRight}
                  iconPlacement="right"
                  className="rounded-full px-8 py-6 text-base transition-all duration-300 hover:scale-105 font-semibold shadow-lg"
                >
                  View Projects
                </Button>
              </Link>
            </motion.div>
          </NeumorphicCard>

          {/* Right Card: Motto & Vision */}
          <NeumorphicCard className="flex flex-col justify-center space-y-8 text-center lg:text-left min-h-[350px]">
            <motion.h2
              variants={itemAnimation}
              className="text-2xl md:text-3xl font-semibold text-white/90 leading-snug"
            >
              "{config.developer.motto}"
            </motion.h2>

            <div className="w-16 h-1 bg-primary/50 mx-auto lg:mx-0 rounded-full" />

            <motion.p
              variants={itemAnimation}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed"
            >
              {config.developer.vision}
            </motion.p>
          </NeumorphicCard>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute -z-10 inset-0 pointer-events-none"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
          </motion.div>
        </motion.div>

        <div className="mt-24">
          <SkillsShowcase />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
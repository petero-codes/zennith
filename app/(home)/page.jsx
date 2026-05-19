"use client"
import React from 'react'
import HeroSection from './components/HeroSection'
import GithubProjects from './components/GithubProjects'
import SkillsSection from './components/Skills'
import ExperienceSection from './components/Experience'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'

import MatrixCard from './components/MatrixCard'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ExperienceSection />
      <GithubProjects />
      <SkillsSection />
      
      {/* Contact Button Section */}
      <section className="py-16 pb-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            <MatrixCard className="h-64 flex-col gap-4 group cursor-pointer hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Innovate?</h3>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white text-sm font-medium transition-all duration-300 backdrop-blur-sm"
                >
                  <span>Get In Touch</span>
                  <HiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.button>
              </Link>
            </MatrixCard>

            <MatrixCard className="h-64 flex-col gap-4 group cursor-pointer hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">See Our Work</h3>
              <Link href="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white text-sm font-medium transition-all duration-300 backdrop-blur-sm"
                >
                  <span>Explore Projects</span>
                  <HiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.button>
              </Link>
            </MatrixCard>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
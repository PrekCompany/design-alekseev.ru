import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProjectBrief {
  conceptName: string;
  visualStyle: string;
  keyFeatures: string;
}
export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  summary: string;
  details: string[];
  image: string;
}

export interface CaseStudy {
  id: string;
  caseNumber: string;
  title: string;
  concern: string;
  duration: string;
  treatment: string;
  beforeImage: string;
  afterImage: string;
  notes: string;
}

export interface JourneyStep {
  numeral: string;
  title: string;
  description: string;
  detail: string;
}

export interface HairProtocol {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  indication: string;
  procedure: string;
  timeline: string;
  benefits: string[];
  color: {
    badgeBg: string;
    badgeText: string;
    border: string;
    accent: string;
    lightBg: string;
  };
}

export interface BookingFormData {
  name: string;
  phone: string;
  service: string;
  date: string;
  timeSlot: string;
  notes: string;
}

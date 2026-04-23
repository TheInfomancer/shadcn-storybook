import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

const faqs = [
  { q: 'Is it accessible?',       a: 'Yes. It adheres to the WAI-ARIA design pattern.' },
  { q: 'Is it styled?',           a: 'Yes. It comes with default styles that match the other components.' },
  { q: 'Is it animated?',         a: 'Yes. It\'s animated by default, but you can disable it.' },
  { q: 'Can I customise it?',     a: 'Yes. You can override the default styles using Tailwind utility classes.' },
];

export default {
  title: 'Molecules/Accordion',
  component: Accordion,
  parameters: { layout: 'centered' },
};

export const Default = {
  render: () => (
    <Accordion type="single" collapsible className="w-96">
      {faqs.map(({ q, a }) => (
        <AccordionItem key={q} value={q}>
          <AccordionTrigger>{q}</AccordionTrigger>
          <AccordionContent>{a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  ),
};

export const Multiple = {
  name: 'Multiple Open',
  render: () => (
    <Accordion type="multiple" className="w-96">
      {faqs.map(({ q, a }) => (
        <AccordionItem key={q} value={q}>
          <AccordionTrigger>{q}</AccordionTrigger>
          <AccordionContent>{a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  ),
};

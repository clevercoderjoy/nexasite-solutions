import React from 'react'
import { AccordionItem, AccordionTrigger, AccordionContent, Accordion } from './ui/accordion'

interface AccordionContainerProps {
  trigger: string
  content: string[]
}

const AccordionContainer: React.FC<AccordionContainerProps> = ({ trigger, content }) => {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full border-2 border-gray-200 transition-colors duration-200 hover:bg-[#edeff2] hover:border-[#dee1e7]"
    >
      <AccordionItem
        value={trigger}
      >
        <AccordionTrigger
          className="px-4 py-2 mb-1 text-xl font-medium"
        >
          {trigger}
        </AccordionTrigger>
        {content.map((item, index) => (
          <AccordionContent key={index}>
            <div className="px-4 py-2 ml-4 mr-2 rounded-full text-lg border-2 border-transparent hover:bg-gray-200 hover:border-[#dee1e7] transition-colors duration-200">
              {item}
            </div>
          </AccordionContent>
        ))}
      </AccordionItem>
    </Accordion>
  )
}

export default AccordionContainer
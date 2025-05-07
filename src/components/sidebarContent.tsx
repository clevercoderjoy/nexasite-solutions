import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from './ui/sheet'
import { RxHamburgerMenu } from 'react-icons/rx'
import AccordionContainer from './accordionContainer';

const SidebarContent = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="w-10 h-10 border-2 border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-200 hover:border-gray-300">
          <RxHamburgerMenu className="w-5 h-5 text-gray-700" />
        </div>
      </SheetTrigger>

      <SheetContent
        side="left"
        aria-describedby={undefined}
        className="w-full max-w-[350px] sm:max-w-[380px] bg-[#f3f4f6] shadow-xl"
      >
        <SheetHeader className='mt-4'>
          <SheetTitle className="text-xl font-semibold text-gray-800">
            Browse Categories
          </SheetTitle>
        </SheetHeader>

        <ul className="space-y-2">
          <li>
            <AccordionContainer
              trigger="Category 1"
              content={['SubCategory 1.1', 'SubCategory 1.2']}
            />
          </li>
          <li>
            <AccordionContainer
              trigger="Category 2"
              content={['SubCategory 2.1', 'SubCategory 2.2']}
            />
          </li>
          <li>
            <AccordionContainer
              trigger="Category 3"
              content={['SubCategory 3.1', 'SubCategory 3.2']}
            />
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  )
}

export default SidebarContent

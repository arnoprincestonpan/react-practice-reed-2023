import AccordionItem from "./AccordionItem"
import { useState } from 'react'

function AccordionItemList({accordionsData}) {
    const [accordions, setAccordions] = useState(accordionsData);

    const handleToggle = (index) => {
        setAccordions((previousAccordions) => previousAccordions.map((a, i) => (
          i === index ? {...a, button : !a.button} : a
        )));
      }
  return (
    <>
        {
            accordions.map((accordion, index) =>
            {
                <AccordionItem
                key={index}
                accordion={accordion}
                index={index}
                toggleAccordion={handleToggle}
                />
            })
        }
    </>
  )
}

export default AccordionItemList
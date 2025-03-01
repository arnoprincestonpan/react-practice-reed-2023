import AccordionItem from "./AccordionItem"
import { useState } from 'react'

function AccordionItemList({accordionsData}) {
    const [accordions, setAccordions] = useState(accordionsData)
    const handleToggle = (index) => {
        setAccordions((previousAccordions) => previousAccordions.map((previousAccordion, previousAccordionIndex) => (
            previousAccordionIndex === index ? {...previousAccordion, button : !previousAccordion.button} : previousAccordion
        )))
    }
  return (
    <>
        <div className='container'>
            <h1>Accordions | FAQ Operating Systems</h1>
            {
            accordions.map((accordion, index) => (
                <AccordionItem
                key={index}
                accordion={accordion}
                index={index}
                toggleAccordion={handleToggle}
                />
            ))
            }
        </div>
    </>
  )
}

export default AccordionItemList
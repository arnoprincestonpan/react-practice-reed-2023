function AccordionItem({ accordion, index, toggleAccordion}) {
  return (
    <div className="card">
        <div className="question">
        <h3>{(index + 1)}. {accordion.question}</h3>
        <button onClick={() => toggleAccordion(index)}>+</button>
        </div>
        {accordion.button && <p className='answer'>{accordion.answer}</p>}
    </div>
  )
}

export default AccordionItem
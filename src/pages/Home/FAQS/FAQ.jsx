import React from "react";

function FAQ({ ques, ans }) {
  return (
    <div className="collapse collapse-plus bg-base-100 border border-base-300 shadow-sm py-2">
      <input type="radio" name="my-accordion-3" />
      <div className="collapse-title font-semibold">{ques}</div>
      <div className="collapse-content text-sm max-w-[700px]">{ans}</div>
    </div>
  );
}

export default FAQ;

import { FaCommentDots } from "react-icons/fa";
import FAQ from "./FAQ";

function FAQS() {
  const faqs = [
    {
      id: 2,
      question: "Can I cancel my registration after signing up?",
      answer:
        "Yes, you can cancel your registration from your dashboard before the registration deadline. Refund policies may vary by event.",
    },
    {
      id: 3,
      question: "Is there a registration fee for the events?",
      answer:
        "Some events may require a fee, while others are free. Details are provided on the event's page.",
    },
    {
      id: 4,
      question: "How will I get updates about the events?",
      answer:
        "You’ll receive email notifications and can also check updates directly on your dashboard under the event details section.",
    },
    {
      id: 5,
      question: "Can I join multiple events at the same time?",
      answer:
        "Yes, you can register for multiple events as long as their schedules do not overlap.",
    },
  ];

  return (
    <div className="my-28 flex flex-col lg:flex-row gap-14">
      <div className=" space-y-5 w-full lg:w-2/3">
        <div className="collapse collapse-plus bg-base-100 border border-base-300 shadow-sm py-2 ">
          <input
            type="radio"
            name="my-accordion-3"
            defaultChecked
            className="accent-amber-500"
          />
          <div className="collapse-title font-semibold text-orange-400">
            How do I register for a marathon event?
          </div>
          <div className="collapse-content text-sm max-w-[700px]">
            You can register by logging into your RunNexus account and selecting
            the marathon event you wish to join. Then click on the 'Register
            Now' button.
          </div>
        </div>

        {faqs.map((faq) => (
          <FAQ key={faq.id} ques={faq.question} ans={faq.answer} />
        ))}
      </div>

      <div className="dark:bg-base-100 w-full lg:w-1/3 flex flex-col  items-center text-center px-8 py-20 md:py-28 border-1 border-gray-200 rounded-xl shadow-sm">
        <span>
          <FaCommentDots size={50} className="text-orange-400" />
        </span>
        <h3 className="text-2xl font-semibold mb-6 mt-5 ">
          Can't find answer to your question?
        </h3>
        <p className="mb-7 text-sm md:text-base ">
          {" "}
          No worries! We're here to help. Feel free to reach out to us anytime
          through our social media channels or email us directly at
        </p>
        <button className="bg-orange-400 text-slate-100 px-8 py-2 rounded-full font-medium">
          Contact us
        </button>
      </div>
    </div>
  );
}

export default FAQS;

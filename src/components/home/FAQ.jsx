import { RiAddLine } from "@remixicon/react";
import React, { useState } from "react";
import GenericContainer from "../containers/GenericContainer";
import SectionContainer from "../containers/SectionContainer";
import EmailForm from "../global/EmailForm";
import SectionHeading from "../headings/SectionHeading";
import { useTranslateContext } from "../../hooks/TranslationProvider";

const faq = [
  {
    question: "What is Flicksy?",
    answer:
      "Flicksy is a streaming service that provides access to movies, shows, and documentaries",
  },
  {
    question: "Where can I watch?",
    answer: "You can watch Flicksy on your smart TV, laptop, tablet, or phone",
  },
  {
    question: "What can I watch on Flicksy?",
    answer:
      "On Flicksy, you can watch a variety of genres including action, drama, comedy, and documentaries",
  },
  {
    question: "Is Flicksy good for kids?",
    answer:
      "Yes, Flicksy offers a variety of kid-friendly content including cartoons, animated movies, and family-friendly shows",
  },
];

const FAQCard = ({ question, answer, isOpen, setOpen }) => {
  const { t } = useTranslateContext();
  return (
    <div className="flex flex-col gap-[.1rem]">
      <div
        onClick={setOpen}
        className="flex cursor-pointer items-center justify-between rounded-sm bg-[#2D2D2D] p-4 transition-colors hover:bg-[#707070]"
      >
        <p className="xl:text-lg">{t(question)}</p>
        <RiAddLine />
      </div>
      <div
        className={`${isOpen ? "grid-rows-[1fr] py-4" : ""} grid grid-rows-[0fr] bg-[#2D2D2D] px-4 transition-all duration-500`}
      >
        <p className="overflow-hidden">{t(answer)}.</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const { t } = useTranslateContext();
  const [isOpen, setOpen] = useState({ faqIndex: null });
  const { faqIndex } = isOpen;

  const handleOpen = (index) => {
    if (index === faqIndex) {
      setOpen({ faqIndex: null });
      return;
    }
    setOpen({ faqIndex: index });
  };

  return (
    <SectionContainer>
      <SectionHeading title={t("Frequently Asked Questions")} />
      <GenericContainer>
        <div className="flex flex-col gap-2">
          {faq.map((faq, index) => {
            const { question, answer } = faq;
            return (
              <FAQCard
                key={index}
                question={question}
                answer={answer}
                isOpen={faqIndex === index}
                setOpen={() => handleOpen(index)}
              />
            );
          })}
        </div>
        <div className="w-full py-6 lg:flex lg:flex-col lg:items-center">
          <EmailForm />
        </div>
      </GenericContainer>
    </SectionContainer>
  );
};

export default FAQ;

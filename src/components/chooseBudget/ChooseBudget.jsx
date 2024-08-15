import React from "react";
import Title from "../title/Title";
import ChooseBudgetCard from "./ChooseBudgetCard";

function ChooseBudget() {
  return (
    <div className="px-14">
      <Title title={"Choose Your Budget"} />
      <div class="max-w-[1200px] mx-auto p-5 text-center">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mx-10">
            <ChooseBudgetCard title={"10 Lakh to 50 Lakh"} imgUrl={"https://media.istockphoto.com/id/1165384568/photo/europe-modern-complex-of-residential-buildings.jpg?s=612x612&w=0&k=20&c=iW4NBiMPKEuvaA7h8wIsPHikhS64eR-5EVPfjQ9GPOA="} />
            <ChooseBudgetCard title={"10 Lakh to 50 Lakh"} imgUrl={"https://media.istockphoto.com/id/1165384568/photo/europe-modern-complex-of-residential-buildings.jpg?s=612x612&w=0&k=20&c=iW4NBiMPKEuvaA7h8wIsPHikhS64eR-5EVPfjQ9GPOA="} />
            <ChooseBudgetCard title={"10 Lakh to 50 Lakh"} imgUrl={"https://media.istockphoto.com/id/1165384568/photo/europe-modern-complex-of-residential-buildings.jpg?s=612x612&w=0&k=20&c=iW4NBiMPKEuvaA7h8wIsPHikhS64eR-5EVPfjQ9GPOA="} />
            <ChooseBudgetCard title={"10 Lakh to 50 Lakh"} imgUrl={"https://media.istockphoto.com/id/1165384568/photo/europe-modern-complex-of-residential-buildings.jpg?s=612x612&w=0&k=20&c=iW4NBiMPKEuvaA7h8wIsPHikhS64eR-5EVPfjQ9GPOA="} />
        </div>
      </div>
    </div>
  );
}

export default ChooseBudget;

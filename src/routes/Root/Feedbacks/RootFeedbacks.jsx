import Avatar1 from "../../../assets/feedback-avatar-image-1.png";
import Avatar2 from "../../../assets/feedback-avatar-image-2.png";
import RootFeedback from "./Item/RootFeedback";
import { classNameType } from "../../../types/base";
import { cn } from "../../../lib/utils";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./RootFeedbacks.css";

const feedbacks = [
  {
    avatar: Avatar1,
    name: "Екатерина Вальнова",
    text: "Доброжелательные подсказки\nна всех этапах помогут правильно заполнить \nполя и без затруднений купить авиа или ж/д \nбилет, даже если вы заказываете онлайн билет впервые.",
  },
  {
    avatar: Avatar2,
    name: "Евгений Стрыкало",
    text: "СМС-сопровождение до посадки\nСразу после оплаты ж/д билетов \nи за 3 часа до отправления мы пришлем вам \nСМС-напоминание о поездке.",
  },
  {
    avatar: Avatar1,
    name: "Екатерина Вальнова",
    text: "Доброжелательные подсказки\nна всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн билет впервые.",
  },
  {
    avatar: Avatar2,
    name: "Евгений Стрыкало",
    text: "СМС-сопровождение до посадки\nСразу после оплаты ж/д билетов \nи за 3 часа до отправления мы пришлем вам СМС-напоминание о поездке.",
  },
  {
    avatar: Avatar1,
    name: "Екатерина Вальнова",
    text: "Доброжелательные подсказки\nна всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн билет впервые.",
  },
  {
    avatar: Avatar2,
    name: "Евгений Стрыкало",
    text: "СМС-сопровождение до посадки\nСразу после оплаты ж/д билетов \nи за 3 часа до отправления мы пришлем вам СМС-напоминание о поездке.",
  },
];

function RootFeedbacks({ className, ...props }) {
  return (
    <div className={cn("root-feedbacks", className)} {...props}>
      <div className="root-feedbacks__container container">
        <h2 className="root-feedbacks__title">отзывы</h2>
        <Swiper
          className="root-feedbacks__swiper"
          modules={[Pagination]}
          pagination={{ clickable: true }}
          slidesPerView={2}
          spaceBetween={48}
        >
          {feedbacks.map((feedback, index) => (
            <SwiperSlide className="root-feedbacks__swiper-slide" key={index}>
              <RootFeedback className="root-feedbacks__item" {...feedback} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

RootFeedbacks.propTypes = { className: classNameType };

export default RootFeedbacks;

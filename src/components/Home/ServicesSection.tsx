"use client";

import { useEffect, useState } from "react";
import styles from "../../styles/Home/ServicesSection.module.css";

const ServicesSection = () => {
  const services = [
    {
      title: "Service 1",
      description: "Description",
      image: "/Exchange.jpg",
    },
    {
      title: "Service 2",
      description: "Description",
      image: "/Exchange.jpg",
    },
    {
      title: "Service 3",
      description: "Description",
      image: "/Exchange.jpg",
    },
    {
      title: "Service 4",
      description: "Description",
      image: "/Exchange.jpg",
    },
    {
      title: "Service 5",
      description: "Description",
      image: "/Exchange.jpg",
    },
    {
      title: "Service 6",
      description: "Description",
      image: "/Exchange.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [services.length]);

  const getPosition = (index: number) => {
    const total = services.length;
    const left = (currentIndex - 1 + total) % total;
    const right = (currentIndex + 1) % total;

    if (index === currentIndex) return "middle";
    if (index === left) return "left";
    if (index === right) return "right";
    return "hidden";
  };

  return (
    <section className={styles.servicesSection}>
      <h2>Our Services</h2>
      <div className={styles.servicesContainer}>
        {services.map((service, index) => {
          const position = getPosition(index);

          return (
            <div
              key={index}
              className={`${styles.serviceCard} ${styles[position]}`}
            >
              <div
                className={styles.cardImage}
                style={{ backgroundImage: `url(${service.image})` }}
              ></div>
              <div className={styles.cardContent}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesSection;
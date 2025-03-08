import styles from "../../styles/Home/AboutSection.module.css";

const Expertise = () => {
  return (
    <section className={styles.aboutSection}>
      <h1>Our Expertise</h1>
      <div className={styles.aboutContainer}>
        
        <div className={styles.aboutContent}>
          <p className={styles.aboutDD}>
              <h1 className={styles.mainD}>
                Why 
                Choose Us?
              <br />
              </h1>
            <br />
            Our mission is to provide elite investment opportunities with integrity, security, and professionalism. We empower clients with exclusive access to premium financial services and global trade expertise.
          </p>
        </div>
        <div className={styles.aboutPhoto}>
          <img src="..\a.Expertise.png" alt="About Us" />
        </div>
      </div>
    </section>
  );
};

export default Expertise;
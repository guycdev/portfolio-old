import React, { useState } from "react";
import styles from "./Resume.module.css";
import ResumeMenu from "./ResumeMenu";
import { Outlet } from "react-router-dom";

export default function Resume() {
  return (
    <section className={styles.resumeContainer}>
      <ResumeMenu />
      <div className="card">
        <Outlet />
      </div>
    </section>
  );
}

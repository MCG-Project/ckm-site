import React from "react";
import { ListGroup } from "react-bootstrap";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/Services.module.css";

export function Services(props) {
  return (
    <>
      <p className="w-75 mt-4 text-center fs-5">{props.mainContent}</p>
      <ListGroup className="w-50 mt-2">
        {props.listContent.map((item) => (
          <div className="d-flex flex-row">
            <FontAwesomeIcon icon={faCheck} className={styles.icon} />
            <ListGroup.Item className={styles.listItem}>
              <strong> {item.title}</strong>
              {item.content}
            </ListGroup.Item>
          </div>
        ))}
      </ListGroup>
      <p className="w-75 mt-4 text-center fs-5">{props.secondaryContent}</p>
    </>
  );
}

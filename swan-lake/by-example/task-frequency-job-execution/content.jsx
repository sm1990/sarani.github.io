import React, { useState, useEffect } from "react";
import { setCDN } from "shiki";
import { Container, Row, Col } from "react-bootstrap";
import DOMPurify from "dompurify";
import {
  copyToClipboard,
  removeEscapes,
  shikiTokenizer,
} from "../../../utils/bbe";
import Link from "next/link";

setCDN("https://unpkg.com/shiki/");

const codeSnippetData = [`import ballerina/io;
import ballerina/lang.runtime;
import ballerina/task;

// Creates a job to be executed by the scheduler.
class Job {

    *task:Job;
    int i = 1;

    // Executes this function when the scheduled trigger fires.
    public function execute() {
        self.i += 1;
        io:println("MyCounter: ", self.i);
    }

    isolated function init(int i) {
        self.i = i;
    }
}

public function main() returns error? {

    // Schedules the task to execute the job every second.
    task:JobId id = check task:scheduleJobRecurByFrequency(new Job(0), 1);

    // Waits for nine seconds.
    runtime:sleep(9);

    // Unschedules the job.
    check task:unscheduleJob(id);
}
`]

export default function TaskFrequencyJobExecution() {
  const [click1, updateClick1] = useState(false);
  const [codeSnippets, updateSnippets] = useState([]);
  const [btnHover, updateBtnHover] = useState([false, false]);

  useEffect(() => {
    async function loadCode() {
      for (let snippet of codeSnippetData) {
        const output = await shikiTokenizer(snippet, "ballerina");
        updateSnippets((prevSnippets) => [...prevSnippets, output]);
      }
    }
    loadCode();
  }, []);

  return (
    <Container className="d-flex flex-column h-100">
      <h1>Schedule job recurrence by frequency</h1>


<p>A  <code>task:scheduleJobRecurByFrequency()</code> can be used to execute Ballerina jobs periodically.</p>

<p>The <code>task:Job</code> and interval should be specified and optional configurations are start time,</p>

<p>end time, and maximum count.</p>

<p>For more information on the underlying module,</p>

<p>see the <a href="https://docs.central.ballerina.io/ballerina/task/latest/">Task module</a>.</p>


<Row className="bbeCode px-2 py-0 rounded">
  <Col sm={10}>
    {codeSnippets[0] != undefined && (
      <div
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(codeSnippets[0]),
        }}
      />
    )}
  </Col>
  <Col className="d-flex align-items-start pt-2" sm={2}>
    <button
        className="btn rounded ms-auto"
        onClick={() => {
          window.open(
            "https://play.ballerina.io/?gist=c8b088f23e7ae35681368aad0b5bbe63&file=task_frequency_job_execution.bal",
            "_blank"
          );
        }}
        target="_blank"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#000"
          className="bi bi-play-circle"
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
        </svg>
      </button>
    <button
      className="btn rounded"
      onClick={() => {
        window.open("https://github.com/ballerina-platform/ballerina-distribution/tree/v2201.0.3/task-frequency-job-execution", "_blank");
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="#000"
        className="bi bi-github"
        viewBox="0 0 16 16"
      >
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
      </svg>
    </button>
    {click1 ? (
      <button className="btn rounded" disabled>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#45FF00"
          className="bi bi-check"
          viewBox="0 0 16 16"
        >
          <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
        </svg>
      </button>
    ) : (
      <button
        className="btn rounded"
        onClick={() => {
          copyToClipboard(codeSnippetData[0]);
          updateClick1(true);
          setTimeout(() => {
            updateClick1(false);
          }, 3000);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#000"
          className="bi bi-clipboard"
          viewBox="0 0 16 16"
        >
          <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
          <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
        </svg>
      </button>
    )}
  </Col>
</Row>

<br />

<Row className="bbeOutput p-2 rounded">
  <pre className="m-0">
    <code className="d-flex flex-column"><span>{`bal run task_frequency_job_execution.bal`}</span>
<span>{`MyCounter: 1`}</span>
<span>{`MyCounter: 2`}</span>
<span>{`MyCounter: 3`}</span>
<span>{`MyCounter: 4`}</span>
<span>{`MyCounter: 5`}</span>
<span>{`MyCounter: 6`}</span>
<span>{`MyCounter: 7`}</span>
<span>{`MyCounter: 8`}</span>
<span>{`MyCounter: 9`}</span>
<span>{`MyCounter: 10`}</span>
</code></pre></Row>

      <br />

      <Row className="mt-auto mb-5">
        <Col sm={6}>
      <Link
        title="Random numbers"
        href="/learn/by-example/random-numbers"
      >
        <div className="btnContainer d-flex align-items-center me-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#3ad1ca"
            className={`${
              btnHover[0] ? "btnArrowHover" : "btnArrow"
            } bi bi-arrow-right`}
            viewBox="0 0 16 16"
            onMouseEnter={() => updateBtnHover([true, false])}
            onMouseOut={() => updateBtnHover([false, false])}
          >
            <path
              fill-rule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>
          <div className="d-flex flex-column ms-4">
            <span className="btnPrev">Previous</span>
            <span
              className={btnHover[0] ? "btnTitleHover" : "btnTitle"}
              onMouseEnter={() => updateBtnHover([true, false])}
              onMouseOut={() => updateBtnHover([false, false])}
            >
              Random numbers
            </span>
          </div>
        </div>
      </Link>
    </Col>
        <Col sm={6}>
      <Link
        title="Schedule one time job"
        href="/learn/by-example/task-one-time-job-execution"
      >
        <div className="btnContainer d-flex align-items-center ms-auto">
          <div className="d-flex flex-column me-4">
            <span className="btnNext">Next</span>
            <span
              className={btnHover[1] ? "btnTitleHover" : "btnTitle"}
              onMouseEnter={() => updateBtnHover([false, true])}
              onMouseOut={() => updateBtnHover([false, false])}
            >
              Schedule one time job
            </span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#3ad1ca"
            className={`${
              btnHover[1] ? "btnArrowHover" : "btnArrow"
            } bi bi-arrow-right`}
            viewBox="0 0 16 16"
            onMouseEnter={() => updateBtnHover([false, true])}
            onMouseOut={() => updateBtnHover([false, false])}
          >
            <path
              fill-rule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            />
          </svg>
        </div>
      </Link>
    </Col>
      </Row> 
    </Container>
  )
}
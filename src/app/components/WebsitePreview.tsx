import { Context } from "../context";
import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
export default function WebsitePreview() {
  const { state, dispatch } = useContext(Context);
  const [url, setUrl] = useState(state.project.projectUrl);
  const [description, setDescription] = useState(state.project.projectTitle);

  useEffect(() => {
    setUrl(state.project.projectUrl);
    setDescription(state.project.projectTitle);
  }, [state.project]);

  const display = url == "" ? "none" : "";

  function handleExitProject() {
    dispatch({
      type: "SET_PROJECT",
      payload: { projectUrl: "", projectTitle: "" },
    });
  }

  return (
    <div className="right-page" style={{ display: `${display}` }}>
      <button
        className="self-end w-fit rounded-full mb-1"
        onClick={handleExitProject}
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <div className="iframe-outer">
        <div className="iframe-inner">
          <iframe id="preview-iframe" src={url} title={description}></iframe>
        </div>
      </div>
    </div>
  );
}

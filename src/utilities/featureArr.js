import minions from "../assets/videos/minion.mp4";

const featuresArr = [
  {
    name: "Minions Cursor Follower",
    description:
      "A minion face whose eyes follow mouse positioning using trigonometry",
    video: minions,
    code: `export default function CursorFollower() {
  const [pupilStyle, setPupilStyle] = 
    useState({
    left: "50%",
    top: "50%",
    transform: "rotate(0deg)",
  });

  const eyeRadius = 8.96;

  const eyeRefs = [useRef(null), useRef(null)];

  function anglePositining(event) {
    eyeRefs.forEach((eyeRef) => {
      const eye = 
      eyeRef.
      current.
      getBoundingClientRect();
      const eyeCenterX = eye.left 
      + eye.width 
      / 2;
      const eyeCenterY = eye.top 
      + eye.height 
      / 2;
      const angle = Math.atan2(
        event.clientY - eyeCenterY,
        event.clientX - eyeCenterX
      );

      const pupilX = 
      eyeRadius 
      * Math.cos(angle) + 2.25 
      * eyeRadius;
      const pupilY =
      eyeRadius 
      * Math.sin(angle) 
      + 2.2 
      * eyeRadius;

      const rotation = angle * (180 / Math.PI);

      setPupilStyle({
        left: pupilX + "px",
        top: pupilY + "px",
        transform: \`rotate(\${rotation}deg)\`,
      });
    });
  }

  useEffect(() => {
    window.addEventListener("mousemove", 
    anglePositining);

    return () => {
      window.removeEventListener("mousemove", 
      anglePositining);
    };
  }, []);

  return (
      <div className="card">
        <div className={styles.goggleContainer}>
          <div className={styles.strapContainer}>
            <div className={styles.eyeWrapper}>
              <div 
              className={styles.eye} 
              ref={eyeRefs[0]}
              >
                <div className={styles.eyeBalls}>
                  <div className={styles.pupels} 
                  style={pupilStyle}
                  >
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.eyeWrapper}>
              <div 
              className={styles.eye} 
              ref={eyeRefs[1]}
              >
                <div className={styles.eyeBalls}>
                  <div className={styles.pupels} 
                  style={pupilStyle}
                  >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    }
  }`,
  },
  {
    name: "Dynamic Progress Bar",
    description:
      "A reusable progress bar component that dynamically fills based on the length of inputs in a form",
    video: minions,
    code: `export default function ProgressBar(props) {
      const { formData, formFieldCount } = props;
    
      function formProgress() {
        let count = 0;

        Object.values(formData).forEach((prev)=>{
          if (Array.isArray(prev)){
            return isObjectEmpty(prev[0])
             ? null 
             : count++;
          }
          if (typeof prev == "object"){
            return isObjectEmpty(prev) 
            ? null 
            : count++;
          }
          if (prev) {
            count++;
          }
        });
        return (
          count 
          / formFieldCount
          ) 
          * 100;
      }
    
      function isObjectEmpty(obj) {
        for (let key in obj) {
          //Handle edge case of 
          start date 
          having a default value
          if (
            obj[key] && key != "start") {
            return false;
          }
        }
        return true;
      }
    
      const progressBar = 
      formProgress();
    
      return (
        <div 
        className=
        "progress-bar-container"
        >
          <div
            className="progress-bar"
            style=
            {
              {
                 width: 
                 "{progressBar}%", 
                 opacity: 
                 progressBar > 0 ? 1 : 0 
                }
              }
          ></div>
        </div>
      );
      }`,
  },
];

export default featuresArr;

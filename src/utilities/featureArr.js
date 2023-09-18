import minions from "../assets/videos/minion.mp4";
import progressBar from "../assets/videos/progressBar.mp4";
import video from "../assets/videos/video.mp4";
import total from "../assets/videos/total.mp4";

const featuresArr = [
  {
    name: "Minions Cursor Follower",
    description:
      "A minion face whose eyes follow mouse positioning using trigonometry",
    video: minions,
    links: [
      "https://github.com/gcWDev/Analog-Designs/blob/main/frontend/src/pages/NewAuth/AuthHeroCard.jsx",
      "http://analogdesigns.net/account",
    ],
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
      const eye = eyeRef.
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
    video: progressBar,
    links: [
      "https://github.com/gcWDev/Analog-Designs/blob/main/frontend/src/components/ProgressBar.jsx",
      "http://analogdesigns.net/dashboard/order",
    ],
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
  {
    name: "Dynamic Video Player",
    description:
      "A video player to showcase previous deployments without loading buffer when video state changes.",
    video: video,
    links: [
      "https://github.com/gcWDev/Analog-Designs/tree/main/frontend/src/pages/Home/VideoObject",
      "http://analogdesigns.net/#demos",
    ],
    code: `export default function VideoPlayer(props) {
      const { video } = props;
    
      const videos = videoArr.map((e, index) => {
        return (
          <video
            key={index}
            style=
            {
              { 
                display: video === index ? 
                "block" : "none" 
              }
            }
            src={videoArr[index]}
            autoPlay
            loop
            muted
          >
            <source src={videoArr[index]} 
            type="video/mp4" 
            />
            Your browser does not support 
            the video tag.
          </video>
        );
      });
    
      return (
        <div className="video-player-container">
          <Card id={0}>{videos}</Card>
        </div>
      );
    }
    
    export default function ControlBar(props) {
      const { 
        video, 
        setVideo, 
        header, 
        subtitle 
      } = props;
    
      function handleSelection(index) {
        setVideo(index);
      }
    
      const optionsArr = options
      .map((e, index) => {
        return (
          <Option
            key={index}
            options={e}
            isSelected={index == video}
            onClick={
              () => handleSelection(index)
            }
            setVideo={setVideo}
          />
        );
      });
    
      return (
        <div className="control-bar-container">
          <Card 
            id={0} 
            heading={header} 
            content={subtitle}
            >
            <div className="control-bar">
            {optionsArr}
            </div>
          </Card>
        </div>
      );
    }
    `,
  },
  {
    name: "Animated Order Total",
    description:
      "A chart representing price expense breakdown that animates price changes based on calander state",
    video: total,
    links: [
      "https://github.com/gcWDev/Analog-Designs/blob/main/frontend/src/pages/Dashboard/DashboardOrder/OrderSummaryChart.jsx",
      "http://analogdesigns.net/dashboard/order",
    ],
    code: `export default function Calendar(props) {
      const { 
        startDate, 
        endDate, 
        setFormData 
      } = props;
    
      const onChange = (dates) => {
        const [start, end] = dates;
    
        setFormData((prev) => {
          const newDatesObj = {
            start: start,
            end: end,
          };
    
          return {
            ...prev,
            dates: newDatesObj,
          };
        });
      };
    
      return (
        <div className="card">
          <div className={
            styles.orderFormHeadings
          }
          >
            <h2>Estimated Project Duration</h2>
            <p>
            Select the estimated 
            application duration
            </p>
          </div>
          <DatePicker
            selected={startDate}
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            inline
          />
          <div className={styles.dateContainer}>
            <input
              type="text"
              placeholder="Start date..."
              value=
              {new Date(startDate).toDateString()}
              disabled
            />
            <input
              type="text"
              placeholder="End date..."
              value=
              {endDate 
                ? new Date(endDate).toDateString() 
                : ""}
              disabled
            />
          </div>
        </div>
      );
    }

    export default 
    function OrderSummaryChart(props) {
      const { 
        end, 
        start, 
        handleSubmit 
      } = props;
    
      const [
        orderTotal, 
        setOrderTotal
      ] = useState(220);

      const [
        displayedOrderTotal, 
        setDisplayedOrderTotal
      ] = useState(0);
    
      useEffect(() => {
        const diff = 
        orderTotal - displayedOrderTotal;
        const step = Math.sign(diff) * 1;
        const stepsRequired = Math.abs(diff) / 1;
    
        for (let i = 0; i < stepsRequired; i++) {
          setTimeout(() => {
            setDisplayedOrderTotal(
              (prev) => prev + step);
          }, i * 2);
        }
      }, [orderTotal]);
    
      useEffect(() => {
        function orderTotalCalculator() {
          const startDate = new Date(start);
          const endDate = new Date(end);
    
          let months;
          months = 
          (startDate.getFullYear() 
          - endDate.getFullYear()) 
          * 12;
          months -= startDate.getMonth();
          months += endDate.getMonth();
          return months == 0 
          ? 1 
          : Math.ceil(months);
        }
        if (end) {
          const months = orderTotalCalculator();
          setOrderTotal(220 + months * 40);
        } else {
          setOrderTotal(220);
        }
      }, [new Date(end).toDateString()]);
    
      return (
        <div className={card}>
          <Chart
            title="Order breakdown"
            rotate={true}
            data={{
              labels: [
                "Package base", 
                "Hosting costs", 
                "Domain costs"
              ],
              datasets: [
                {
                  label: "Price",
                  data: [200, {orderTotal - 200}, 20],
                  backgroundColor: [
                    "#b6bdff", 
                    "#dddfff", 
                    "#d0d4ff"
                  ],
                  borderWidth: 2,
                },
              ],
            }}
          />
          <h2 style={{ textAlign: "center" }}>
            Order total: {displayedOrderTotal}.00
          </h2>
          <Button
            buttonType="primary-btn"
            text="Submit Order"
            img={globe}
            action={handleSubmit}
          />
        </div>
      );
    }
    `,
  },
];

export default featuresArr;

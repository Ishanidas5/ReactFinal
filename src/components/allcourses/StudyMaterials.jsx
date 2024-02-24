import React, { useState } from "react";

const StudyMaterials = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
  });

  const handleOptionChange = (question, value) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [question]: value,
    }));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>APTITUDE</h1>
      <div>
        <p>
          Two ships are sailing in the sea on the two sides of a lighthouse. The
          angle of elevation of the top of the lighthouse is observed from the
          ships are 30° and 45° respectively. If the lighthouse is 100 m high,
          the distance between the two ships is:
        </p>
        <p>
          <ol>
            <li>173 m</li>
            <li>200 m</li>
            <li>273 m</li>
            <li>300 m</li>
          </ol>
        </p>
        <select
          value={selectedOptions.question1}
          onChange={(e) => handleOptionChange("question1", e.target.value)}
        >
          <option value="">View Solution</option>
          <option>
            Then, AB = 100 m, ACB = 30° and ADB = 45°. AB/AC = tan 30° = 1/ sqrt
            3 AC = AB x sqrt 3 = 100 sqrt 3 m. AB/AD = tan 45° = 1 AD = AB = 100
            m. CD = (AC + AD) = (1003 + 100) m = 100(3 + 1) = (100 x 2.73) m =
            273 m
          </option>
        </select>
      </div>

      <div>
        <p>
          A man standing at a point P is watching the top of a tower, which
          makes an angle of elevation of 30° with the man's eye. The man walks
          some distance towards the tower to watch its top and the angle of the
          elevation becomes 60°. What is the distance between the base of the
          tower and the point P?
        </p>
        <p>
          <ol>
            <li>4 sqrt 3 units</li>
            <li>8 units</li>
            <li>12 units</li>
            <li>Data inadequate</li>
            <li>None of these</li>
          </ol>
        </p>
        <select
          value={selectedOptions.question2}
          onChange={(e) => handleOptionChange("question2", e.target.value)}
        >
          <option value="">View Solution</option>
          <option>One of AB, AD and CD must have given.</option>
        </select>
      </div>

      <div>
        <p>
          From a point P on a level ground, the angle of elevation of the top
          tower is 30°. If the tower is 100 m high, the distance of point P from
          the foot of the tower is:
        </p>
        <p>
          <ol>
            <li>21.6 m</li>
            <li>23.2 m</li>
            <li>12 units</li>
            <li>24.72 m</li>
            <li>None of these</li>
          </ol>
        </p>
        <select
          value={selectedOptions.question3}
          onChange={(e) => handleOptionChange("question3", e.target.value)}
        >
          <option value="">View Solution</option>
          <option>
            Then, APB = 30° and AB = 100 m. AB/AP = tan 30° = 1/SQRT 3 AP = (AB
            x sqrt 3) m = 1003 m = (100 x 1.73) m = 173 m..
          </option>
        </select>
      </div>

      <div>
        <p>
          In the first 10 overs of a cricket game, the run rate was only 3.2.
          What should be the run rate in the remaining 40 overs to reach the
          target of 282 runs?:
        </p>
        <p>
          <ol>
            <li>6.25</li>
            <li>6.5</li>
            <li>6.75</li>
            <li>7</li>
          </ol>
        </p>
        <select
          value={selectedOptions.question4}
          onChange={(e) => handleOptionChange("question4", e.target.value)}
        >
          <option value="">View Solution</option>
          <option>
            Required run rate = 282 - (3.2 x 10)/40 = 250/40 = 6.25
          </option>
        </select>
      </div>

      <div>
        <p>
          A grocer has a sale of Rs. 6435, Rs. 6927, Rs. 6855, Rs. 7230 and Rs.
          6562 for 5 consecutive months. How much sale must he have in the sixth
          month so that he gets an average sale of Rs. 6500?
        </p>
        <p>
          <ol>
            <li>Rs. 4991</li>
            <li>Rs. 5991</li>
            <li>Rs. 6001</li>
            <li>Rs. 6991</li>
          </ol>
        </p>
        <select
          value={selectedOptions.question5}
          onChange={(e) => handleOptionChange("question5", e.target.value)}
        >
          <option value="">View Solution</option>
          <option>
            Total sale for 5 months = Rs. (6435 + 6927 + 6855 + 7230 + 6562) =
            Rs. 34009. Required sale = Rs. [ (6500 x 6) - 34009 ] = Rs. (39000 -
            34009) = Rs. 4991.
          </option>
        </select>
      </div>
    </div>
  );
};

export default StudyMaterials;

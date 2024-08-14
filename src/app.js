/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  //write your code here
  document.querySelector("#excuse").innerHTML = generateExcuse();
};

let generateExcuse = () => {
  let pronoun = ["My", "Your", "A"];
  let subject = ["grandma", "alligator", "ghost", "leprechan"];
  let action = ["ate my", "stole my", "danced on my"];
  let possession = ["homework", "head", "pinky toe", "dog"];

  let proIndex = Math.floor(Math.random() * pronoun.length);
  let subIndex = Math.floor(Math.random() * subject.length);
  let actIndex = Math.floor(Math.random() * action.length);
  let posIndex = Math.floor(Math.random() * possession.length);

  return (
    pronoun[proIndex] +
    " " +
    subject[subIndex] +
    " " +
    action[actIndex] +
    " " +
    possession[posIndex]
  );
};

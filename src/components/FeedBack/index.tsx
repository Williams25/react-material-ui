import { Player } from "@lottiefiles/react-lottie-player";
import error from "./error.json";
import success from "./success.json";

interface FeedbackPorps {
  feedback: boolean;
}

export const Feedback = ({ feedback }: FeedbackPorps) => {
  return (
    <Player
      autoplay
      style={{ height: "100%", width: 200 }}
      src={feedback ? success : error}
    />
  );
};

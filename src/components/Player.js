import ReactPlayer from 'react-player';
//  SVG
import { Play } from 'svg';

const Player = ({ description, direction, ...props }) => {
  return (
    <div className="player-wrapper" data-direction={direction}>
      <ReactPlayer
        //
        pip
        muted
        playing
        controls
        autoPlay
        volume={1}
        playIcon={<Play />}
        {...props}
      />
      <p className="player-description">{description}</p>
    </div>
  );
};

export default Player;

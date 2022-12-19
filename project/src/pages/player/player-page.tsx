import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PlayerControlFullScreen from '../../components/player-control-full-screen/player-control-full-screen';
import PlayerControlPause from '../../components/player-control-pause/playercontrol-pause';
import PlayerControlPlay from '../../components/player-control-play/play-control-play';
import VideoPlayer from '../../components/video-player/video-player';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFilmByID } from '../../store/api-actions';
import { getFilm, getIsFilmFoundStatus, getIsFilmLoadingStatus } from '../../store/film-data/selectors';
import WarningPage from '../404-page/404-page';
import LoadingPage from '../loading-page/loading-page';

function PlayerPage(): JSX.Element {
  const id = Number(useParams().id);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isPlay, setIsPlay] = useState(true);

  dayjs.extend(duration);

  const film = useAppSelector(getFilm);

  const isFilmFoundStatus = useAppSelector(getIsFilmFoundStatus);
  const isFilmLoadingStatus = useAppSelector(getIsFilmLoadingStatus);

  const handleClickExitButton = () => {
    navigate(-1);
  };

  const handleClickPlayButton = () => {
    setIsPlay(true);
  };

  const handleClickPauseButton = () => {
    setIsPlay(false);
  };

  useEffect(() => {
    dispatch(fetchFilmByID(id.toString()));
  }, [id, dispatch]);

  if (isFilmLoadingStatus) {
    return <LoadingPage />;
  }

  if (!isFilmFoundStatus) {
    return <WarningPage />;
  }
  return (
    <div className="player">
      <VideoPlayer isMute={false} isPlay={isPlay} poster={film?.previewImage || ''} src={film?.videoLink || ''} />

      <button type="button" className="player__exit" onClick={handleClickExitButton}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="0" max="100"></progress>
            <div className="player__toggler" style={{ left: '0%' }}>Toggler</div>
          </div>
          <div className="player__time-value">
            {
              dayjs
                .duration(film?.runTime || 0, 'minutes')
                .format(`${film?.runTime || 0 > 60 ? 'H[:]m[:]ss' : 'm'}`)
            }
          </div>
        </div>

        <div className="player__controls-row">
          {
            isPlay
              ? <PlayerControlPause onClick={handleClickPauseButton} />
              : <PlayerControlPlay onClick={handleClickPlayButton} />
          }
          <div className="player__name">Transpotting</div>

          <PlayerControlFullScreen />
        </div>
      </div>
    </div>
  );
}
export default PlayerPage;

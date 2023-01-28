import sClick from '../../sounds/effects/sound-click.wav';
import sDraw from '../../sounds/effects/sound-draw.wav';
import sPlace from '../../sounds/effects/sound-place.wav';
import sStart from '../../sounds/effects/sound-start.wav';
import sWin from '../../sounds/effects/sound-win.wav';

import bgm1 from '../../sounds/bgm/bgm-1.mp3';
import bgm2 from '../../sounds/bgm/bgm-2.mp3';
import bgm3 from '../../sounds/bgm/bgm-3.mp3';
import bgm4 from '../../sounds/bgm/bgm-4.mp3';

const soundEffects = {
  click:sClick,
  draw:sDraw,
  place:sPlace,
  start:sStart,
  win:sWin
}

const bgm = [
  bgm1,
  bgm2,
  bgm3,
  bgm4
]

export {
  soundEffects,
  bgm
};
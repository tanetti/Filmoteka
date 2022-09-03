import { pageState } from '../state';

export const createTrailerModalMarkup = (mainVideo, playList) =>
  `<iframe class="trailer-modal__farame is-hidden" type="text/html" width="560" height="315"
        src="https://www.youtube.com/embed/${
          !playList.length ? mainVideo : ''
        }?autoplay=1&showinfo=0&origin=https://tanetti.github.io&hl=${
    pageState.locale === 'en' ? 'en' : 'uk'
  }&rel=0&iv_load_policy=3&enablejsapi=1${
    playList.length > 0 ? `&playlist=${mainVideo},${playList.join(',')}` : ''
  }" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope" allowfullscreen data-trailer_frame>
  </iframe>`;

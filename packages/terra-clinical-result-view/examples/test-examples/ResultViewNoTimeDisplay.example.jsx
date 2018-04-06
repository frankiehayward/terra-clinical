import React from 'react';
import Base from 'terra-base';
import IconHigh from 'terra-icon/lib/icon/IconHigh';
import ResultView from '../../src/ResultView';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');
const results = [{ value: 503456789, unit: 'ml', normalcy: <IconHigh />, normalcyColor: '#404013' }];

const ResultViewNoTimeDisplay = () => (
  <div>
    <h3>Result View with No Time Display</h3>
    <Base id={1} locale={locale}>
      <ResultView
        results={results}
        hasDocument
        hasComment
        isPadded
      />
    </Base>
  </div>
);

export default ResultViewNoTimeDisplay;

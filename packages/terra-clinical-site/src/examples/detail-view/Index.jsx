import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-clinical-detail-view/docs/README.md';
import { version } from 'terra-clinical-detail-view/package.json';

// Component Source
/* eslint-disable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import DetailViewSrc from '!raw-loader!terra-clinical-detail-view/src/DetailView.jsx';
import DetailListSrc from '!raw-loader!terra-clinical-detail-view/src/DetailList.jsx';
import DetailListItemSrc from '!raw-loader!terra-clinical-detail-view/src/DetailListItem.jsx';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */

// Example files
import DetailViewDivided from './DetailViewDivided';
import DetailViewNoDivider from './DetailViewNoDivider';

const DetailViewExamplesHeadingStyle = {
  marginBottom: '0px',
};
const DetailViewExamplesBoxedStyle = {
  border: '3px dotted #d3d4d5',
};

const DetailViewExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="detail_view_props" src={DetailViewSrc} componentName="Detail View" />
    <PropsTable id="detail_list_props" src={DetailListSrc} componentName="Detail List" />
    <PropsTable id="detail_list_item_props" src={DetailListItemSrc} componentName="Detail List Item" />
    <br />
    <br />
    <br />
    <h2 id="Divided" style={DetailViewExamplesHeadingStyle} >Example Divided Detail View</h2>
    <div style={DetailViewExamplesBoxedStyle}>
      <DetailViewDivided />
    </div>
    <br />
    <br />
    <h2 id="NoDivider" style={DetailViewExamplesHeadingStyle} >Example Non-Divided Detail View</h2>
    <div style={DetailViewExamplesBoxedStyle}>
      <DetailViewNoDivider />
    </div>
  </div>
);

export default DetailViewExamples;

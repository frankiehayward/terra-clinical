import React from 'react';
import ItemView from '../../lib/ItemView';

const comment = id => <ItemView.Comment id={id} text="comment1comment1comment1comment1comment1comment1comment1comment1comment1comment1comment1comment1" />;

const ItemViews = () => (
  <div style={{ width: '250px' }}>
    <h2>Default</h2>
    <ItemView comment={comment(1)} id="ItemView1" />
    <br />
    <h2>Truncated</h2>
    <ItemView isTruncated comment={comment(2)} id="ItemView2" />
  </div>
);

export default ItemViews;

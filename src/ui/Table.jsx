//데이터 테이블 컴포넌트의 전체 스타일을 설정하는 Table컴포넌트 작성

//자식 프로퍼티에 TableHead 컴포넌트와 TableBody 컴포넌트 배치

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles, css, withStylesPropTypes } from './withStyles';

class Table extends PureComponent {
  render() {
    const { styles, children } = this.props;
    return <table {...css(styles.table)}>{children}</table>;
  }
}

Table.propTypes = {
  ...withStylesPropTypes,
  children: PropTypes.node.isRequired,
};

export default withStyles(({ color, unit }) => ({
  table: {
    borderCollapse: 'collapse',
    width: '100%',
  },
}))(Table);

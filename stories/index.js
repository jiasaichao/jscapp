import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs } from 'storybook-readme';
import { withKnobs, text, boolean, number, color, object } from '@storybook/addon-knobs';


import welcomedoc from '../docs/welcome.md';
import flexmd from '../docs/components/flex.md';
import textmd from '../docs/components/text.md';
import iconmd from '../docs/components/icon.md';
import pagemd from '../docs/components/page.md';
import carouselmd from '../docs/components/carousel.md';
import testmd from '../docs/test.md';

import { Flex, Abs, Icon, Image, Page, Placeholder, Text, TouchableFlex } from '../src/components';
import { Popup } from '../src/components/popup';

// import { Button as Btn } from 'antd-mobile';
// import 'antd-mobile/dist/antd-mobile.css';


import { Button, Welcome } from '@storybook/react/demo';

document.getElementById('root').style.height = '100%';

window.onresize = function () {
  document.querySelector("html").setAttribute("style", "font-size:" + document.body.clientWidth / 7.5 + "px");
};
document.querySelector("html").setAttribute("style", "font-size:" + document.body.clientWidth / 7.5 + "px");


storiesOf('欢迎使用', module).addDecorator(withKnobs)
  .add('运行', withReadme(welcomedoc, () => <Page> <TouchableFlex>aaaa</TouchableFlex> </Page>));

storiesOf('基础组件', module).addDecorator(withKnobs)
  .add('Page(页面)', withReadme(pagemd, () =>
    <Page headBg={color('headBg', '#108ee9')} headColor={color('headColor', '#fff')} back={text('back', '返回')} title={text('title', 'page-sdfsd')}>
      <p>布局在一个100%宽和高，且溢出隐藏的body里，为了方便与统一布sd局</p>

    </Page>
  ))
  .add('Flex(布局)', withReadme(flexmd, () => (
    <Page backName='返回'>
      <Flex style={object('Styles', { height: '2rem', border: '1px solid red' })}
        column={boolean('column', false)}
        flex1={boolean('flex1', false)}
        horizontal={boolean('horizontal', false)}
        HW={boolean('HW', false)}
        vertical={boolean('vertical', false)}
        className={text('className', '')}
      ><span>span1</span><span>span2</span></Flex>
    </Page>
  )))
  .add('Text(文字)', withReadme(textmd, () => (
    <Page>
      <Text label={text('label', '显示文字')} color={color('color', '#ff00ff')} fontSize={text('fontSize', '.28rem')} bold={boolean('bold', false)} style={object('Styles', { border: '1px solid red' })} />
    </Page>
  )))
  .add('Icon(图标)', withReadme(iconmd, () => (
    <Page title='Icon(图标)'>
      <Flex HW style={{ margin: '.1rem' }}>
        <Icon name={text('name', 'arrowUp')} color={color('color', '#BD10E0')} width={text('width', '.3rem')} height={text('height', '.3rem')} background={color('background', '#F8E71C')} />
      </Flex>
      <Flex>
        <ListIcon name='arrowUp' remarks='上箭头' />
        <ListIcon name='arrowRight' remarks='右箭头' />
        <ListIcon name='arrowDown' remarks='下箭头' />
        <ListIcon name='arrowLeft' remarks='左箭头' />
      </Flex>
      <Flex>
        <ListIcon name='arrowBack' remarks='返回' />
        <ListIcon name='arrowForward' remarks='前进' />
        <ListIcon name='closeRound' remarks='关闭' />
        <ListIcon name='plusRound' remarks='加' />
      </Flex>
      <Flex>
        <ListIcon name='arrowThinUp' remarks='细上箭头' />
        <ListIcon name='arrowThinRight' remarks='细右箭头' />
        <ListIcon name='arrowThinDown' remarks='细下箭头' />
        <ListIcon name='arrowThinLeft' remarks='细左箭头' />
      </Flex>
      <Flex>
        <ListIcon name='circleFilled' remarks='填充圆' />
        <ListIcon name='circleOutline' remarks='圆' />
        <ListIcon name='more' remarks='更多' />
        <ListIcon name='moreOutline' remarks='更多' />
      </Flex>
      <Flex>
        <ListIcon name='chatbubble' remarks='聊天' />
        <ListIcon name='chatbubbleOutline' remarks='聊天' />
        <ListIcon name='reload' remarks='刷新' />
        <ListIcon name='loop' remarks='循环' />
      </Flex>
      <Flex>
        <ListIcon name='mic' remarks='麦克风' />
        <ListIcon name='micOutline' remarks='麦克风' />
        <ListIcon name='micOff' remarks='关闭麦克风' />
        <ListIcon name='search' remarks='搜索' />
      </Flex>
      <Flex>
        <ListIcon name='myBill' remarks='我的账单' />
        <ListIcon name='youhuiquan' remarks='优惠券' />
        <ListIcon name='shezhi' remarks='设置' />
        <ListIcon name='jilu' remarks='记录' />
      </Flex>
      <Flex>
        <ListIcon name='morentouxiang' remarks='默认头像' />
        <ListIcon name='saoyisao' remarks='扫一扫' />
        <ListIcon name='shouye' remarks='首页' />
        <ListIcon name='wode' remarks='我的' />
      </Flex>
      <Flex>
        <ListIcon name='xiaoxi' remarks='消息' />
        <ListIcon name='xiangji' remarks='相机' />
        <ListIcon name='shouye' remarks='首页' />
        <ListIcon name='wode' remarks='我的' />
      </Flex>
    </Page>
  )))
  .add('Modal(弹窗)', withReadme(textmd, () => (
    <Page bg='#E6E6E6'>
      <Popup title='标题士大夫' />
    </Page>
  )));

function ListIcon({ name, remarks }) {
  return (
    <Flex flex1 HW column style={{ overflow: 'hidden' }}>
      <Icon name={name} color={color('color', '#BD10E0')} width='90%' background={color('background', '#F8E71C')} />
      <Text label={remarks} />
      <Text label={name} style={{ marginBottom: '.2rem' }} />
    </Flex>
  );
}

storiesOf('下拉刷新', module).addDecorator(withKnobs)
  .add('Base', withReadme(flexmd, () => <div style={{ border: '1px solid red' }}> <Scroll onRefresh={(setSuccess, setLoading) => {
    console.log(5000 + '后成功')
    setTimeout(function () {
      setSuccess();
    }, 5000);

  }} /></div>))
  .add('轮播', withReadme(carouselmd, () => <Page>
    <Carousel
      autoplay={true}
      selectedIndex={0}
      swipeSpeed={35}
      infinite
      beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
      afterChange={index => console.log('slide to', index)}
    >
      <Flex style={{ height: 200, background: '#ff00ff' }}>

      </Flex>
      <Flex style={{ height: 200, background: '#ff003d' }}>

      </Flex>
      <Flex style={{ height: 200, background: '#3d3dff' }}>

      </Flex>
    </Carousel>
  </Page>));

storiesOf('List(列表)', module).addDecorator(withKnobs)
  .add('Base', withReadme(flexmd, () => <List label='我的信息' />))
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);


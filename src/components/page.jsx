import React from 'react';
import { Flex, Abs, Text } from './layout';
import { Icon } from './icon';
import { TouchableFlex } from './touchable';
import { BaseProps } from '../flow/baseprops'

type PageProps = BaseProps & {
    children: React.ReactElement,
    /**标题*/
    title: string,
    /**返回*/
    back: string | null,
    /**头部背景色*/
    headBg: string,
    /**头部字体色*/
    headColor: string,
    /**页面背景色*/
    bg: string,
    onBack: () => {},
    /**ref*/
    dom: () => {},
}

export class Page1 extends React.Component {
    render() {
        return (
            <div style={{ width: '100%', overflowX: 'hidden', overflowY: 'scroll', WebkitOverflowScrolling: 'touch', willChange: 'scroll-position', position: 'absolute', bottom: '.98rem', top: 0 }}>
                {this.props.children}
            </div>
        );
    }
}
export class Page extends React.Component {
    props: PageProps;
    render() {
        let { title, back, headBg = '#108ee9', headColor = '#fff', bg = '', style, children/*, hideHead*/, onBack = () => { } } = this.props
        let styles = { position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, overflow: 'hidden', ...style }
        if (bg) {
            styles.background = bg;
        }
        /**
         * 内容距离顶部距离
         */
        let top = 0;
        let head = null;

        if (title) {
            top = '.9rem';
            head = (
                <Flex HW style={{ height: '.9rem', background: headBg, position: 'relative' }}>
                    <Text label={title} fontSize='.36rem' color={headColor} style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '80%', textAlign: 'center' }} />
                    <TouchableFlex vertical style={{ height: '100%', position: 'absolute', left: 0, padding: '0 .3rem' }}>
                        <Icon name='arrowBack' color={headColor} width='.44rem' height='.44rem' /> <Text fontSize='.32rem' color={headColor} label={back} />
                    </TouchableFlex>
                    <Flex vertical style={{ height: '100%', position: 'absolute', right: '.3rem' }}></Flex>
                </Flex>
            );
        }
        /**#endregion "This is the code to be collapsed" */
        return (
            <div style={styles}>
                {head}
                <div style={{ width: '100%', overflowX: 'hidden', overflowY: 'scroll', WebkitOverflowScrolling: 'touch', willChange: 'scroll-position', position: 'absolute', bottom: 0, top }}>
                    {children}
                </div>
            </div>

        )
    }
}

export function Page2({ title, backName, headBg = '#108ee9', headColor = '#fff', bg = '', style, children/*, hideHead*/ }) {
    let styles = { position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, overflow: 'hidden', ...style }
    if (bg) {
        styles.background = bg;
    }
    /**
     * 内容距离顶部距离
     */
    let top = 0;
    let head = null;

    if (title) {
        top = '.9rem';
        head = (
            <Flex HW style={{ height: '.9rem', background: headBg, position: 'relative' }}>
                <Text label={title} fontSize='.36rem' color={headColor} style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '80%', textAlign: 'center' }} />
                <TouchableFlex vertical style={{ height: '100%', position: 'absolute', left: 0, padding: '0 .3rem' }}>
                    <Icon name='arrowBack' color={headColor} width='.44rem' height='.44rem' /> <Text fontSize='.32rem' color={headColor} label={backName} />
                </TouchableFlex>
                <Flex vertical style={{ height: '100%', position: 'absolute', right: '.3rem' }}></Flex>
            </Flex>
        );
    }
    /**#endregion "This is the code to be collapsed" */
    return (
        <div style={styles}>
            {head}
            <div style={{ width: '100%', overflowX: 'hidden', overflowY: 'scroll', WebkitOverflowScrolling: 'touch', willChange: 'scroll-position', position: 'absolute', bottom: 0, top }}>
                {children}
            </div>
        </div>

    )
}
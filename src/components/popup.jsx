import React from 'react';
import { Page, Icon, Flex, Placeholder, Image, Text, TouchableFlex } from '../../src/components';
export function Popup({ title, content, onTap = () => { }, onCancel = () => { } }) {
    return (
        <Flex column vertical style={{ width: '5.6rem', background: '#FFFFFF', borderRadius: '4px', paddingTop: ".3rem" }} >
            <Flex column flex1 vertical>
                {title && <Text label={title} color='#000000' fontSize='.36rem' style={{ marginBottom: '.3rem' }} />}
                <Text label={content} color='#888888' fontSize='.30rem' style={{ textAlign: 'center', marginBottom: '.3rem', display: 'inlineBlock', padding: '0 .35rem' }} />
            </Flex>
            <Flex horizontal vertical style={{ width: '100%', height: '1rem', position: 'relative', bottom: 0, left: 0, right: 0 }}>
                <Flex style={{ width: '100%', height: 1, background: '#e8e8e8', position: 'absolute', top: 0, left: 0, right: 0 }}></Flex>
                <TouchableFlex style={{ height: '100%', width: '100%' }} onTap={onCancel} flex1 HW>
                    <Text label='取消' color='#000000' fontSize='.36rem' />
                </TouchableFlex>
                <Flex style={{ width: 1, height: '100%', background: '#e8e8e8' }}></Flex>
                <TouchableFlex style={{ height: '100%', width: '100%' }} onTap={onTap} flex1 HW>
                    <Text label='确定' color='#FE7E00' fontSize='.36rem' />
                </TouchableFlex>
            </Flex>
        </Flex>
    )
}
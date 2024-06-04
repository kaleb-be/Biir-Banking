'use client';
import React from 'react'
import CountUp from "react-countup";

interface AnimatedCounterProps {
	amount: number
}

const AnimatedCounter = ({amount}: { amount:number }) => {
	return (
		<p className={'w-full'}>
			<CountUp end={amount} decimal={','} prefix={'$'} decimals={2 } duration={1.5}/>
		</p>
	)
}
export default AnimatedCounter

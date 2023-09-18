import React, { useState } from "react"

import styles from "./Counter.module.css"
import { decrement, increment, incrementByAmount, incrementAsync, incrementIfOdd, selectCount } from "./counterSlice"

import { useAppSelector, useAppDispatch } from "../../app/hooks"

export default function Counter() {
  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()
  const [incrementAmount, setIncrementAmount] = useState("2")

  const incrementValue = Number(incrementAmount) || 0

  return (
    <div>
      <div className={styles.row}>
        <button className={styles.button} aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button className={styles.button} aria-label="Increment value" onClick={() => dispatch(increment())}>
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button className={styles.button} onClick={() => dispatch(incrementByAmount(incrementValue))}>
          1
        </button>
      </div>
    </div>
  )
}

import React from "react";
import "./Text.css";


const Text = ({ text, entities }) => {

  console.log('text', text)
  console.log('entities', entities)

  const parse = (text, entities) => {
    const parsed = entities.reduce( ({ acc, tail, currentOffset }, item) => {
      const token = content(tail, item.offset - currentOffset, item.content.length)

      const texts = token.head.replace("\n", "\n\n").split("\n").map(line => {
        if (line === '') {
          return { type: 'br' }
        } else {
          return { type: 'text', content: line }
        }
      })

      acc.push(...texts)
      acc.push({ type: 'entity', content: token.need, entity: item })

      return { acc, tail: token.tail, currentOffset: item.offset + item.content.length }
    }, { acc: [], tail: text, currentOffset: 0 })

    const texts = parsed.tail.replace("\n", "\n\n").split("\n").map(line => {
      if (line === '') {
        return { type: 'br' }
      } else {
        return { type: 'text', content: line }
      }
    })

    parsed.acc.push(...texts)

    return parsed.acc
  }

  const content2 = parse(text, entities.sort((a, b) => a.offset - b.offset))

  console.log('content', content2)

  function content(text, offset, wordLength) {
    const head = text.substr(0, offset)
    const need = text.substr(offset, wordLength)
    const tail = text.substr(offset + wordLength)

    return {
      head,
      need,
      offset,
      tail,
      wordLength,
    }
  }

  console.log('content2', content2)

  return (
    content2.map((cont, index) => {
      switch (cont.type) {
        case 'text':
          return (
            <span key={index}>
              {cont.content}
            </span>
          )

        case 'br':
          return (<br key={index} />)

        case 'entity':

          const style = {
            'backgroundColor': cont.entity.sentiment > 0
              ? `hsla(118, ${(Math.abs(cont.entity.sentiment.toFixed(3)) + 0.5) * 100}%, 50%, ${Math.abs(cont.entity.magnitude.toFixed(3))})`
              : `hsla(360, ${(Math.abs(cont.entity.sentiment.toFixed(3)) + 0.5) * 100}%, 50%, ${Math.abs(cont.entity.magnitude.toFixed(3))})`
          }

          return (
            <span key={index} style={style}>
              {cont.entity.content}
            </span>
          )
        default: return null
      }
    })
  )
}

export default Text

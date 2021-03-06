import React, { Component, Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import ScrollContainer, { wrapScrollChild } from '../src'
import './index.css'

class ScrollChild extends Component {

  state = {
    offset: 0
  }

  handleScroll = state => {
    const { offset } = state
    // this.setState(state => ({...state, offset: offset.y}))
    this.el.style.transform = `translateX(${offset.y}px)`
  }

  componentDidMount () {
    this.props.scrollbar.addListener(this.handleScroll)
  }

  componentWillUnmount () {
    this.props.scrollbar.removeListener(this.handleScroll)
  }

  render () {
    const { offset } = this.state

    return (
      <div>
        <p>
          Scroll Child
        </p>
        <p ref={ref => this.el = ref}>
          Offset:
          {' '}
          {offset}
        </p>
        <p>
          SC - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in lorem vel nisi bibendum ullamcorper et in ante. Phasellus rutrum quis arcu id sagittis. Donec
          id sodales tortor. Nulla ullamcorper nisi at nunc pellentesque vulputate. Sed interdum congue ultrices. Nulla iaculis elementum risus eu maximus. Sed pellentesque
          rhoncus porttitor. Nullam auctor ante sit amet pellentesque lobortis. Pellentesque nec metus non ligula placerat vehicula at eu arcu. Nullam sed quam sed est
          auctor tincidunt id a elit. Morbi a lorem sit amet ligula ullamcorper lobortis et nec arcu.
        </p>
      </div>
    )
  }

}

const WrappedScrollChild = wrapScrollChild(ScrollChild)

class ExpandableChild extends Component {

  state = {
    expanded: false
  }

  onClick = () => {
    this.setState(state => {
      return {...state, expanded: !this.state.expanded}
    })
  }

  render () {
    const { expanded } = this.state
    const style = {
      height: expanded ? 400 : 100,
      backgroundColor: 'red'
    }
    return (
      <div className='expandable' style={style} onClick={this.onClick} />
    )
  }

}

const Copy = () => {
  return (
    <Fragment>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in lorem vel nisi bibendum ullamcorper et in ante. Phasellus rutrum quis arcu id sagittis. Donec
        id sodales tortor. Nulla ullamcorper nisi at nunc pellentesque vulputate. Sed interdum congue ultrices. Nulla iaculis elementum risus eu maximus. Sed pellentesque
        rhoncus porttitor. Nullam auctor ante sit amet pellentesque lobortis. Pellentesque nec metus non ligula placerat vehicula at eu arcu. Nullam sed quam sed est
        auctor tincidunt id a elit. Morbi a lorem sit amet ligula ullamcorper lobortis et nec arcu.
      </p>
      <p>
        Vivamus eu consectetur sapien. Nulla vestibulum, leo ac ullamcorper tempus, erat diam accumsan odio, vitae auctor massa est vel nisi. Suspendisse vestibulum faucibus
        tellus, id semper massa congue quis. In tempor sodales condimentum. Fusce est tortor, mollis at placerat quis, laoreet vitae quam. Aliquam venenatis varius dolor
        vitae maximus. Fusce vitae mollis ex, quis blandit felis. Sed semper velit et nibh convallis laoreet. Donec auctor commodo mauris, ut pretium diam.
      </p>
      <p>
        Morbi varius, orci at egestas fringilla, lectus enim dictum lacus, vitae lacinia urna nisi at leo. Morbi eget iaculis eros, in imperdiet dolor. Phasellus hendrerit
        velit sit amet lorem tincidunt, eu posuere neque aliquet. Mauris ut arcu pellentesque, tincidunt ante non, convallis dui. Aenean mauris velit, sodales ac dictum
        vel, viverra vitae libero. Donec viverra arcu id nunc faucibus pretium. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent nisl urna, euismod sed porttitor vitae, vulputate ac ex. Curabitur tempor eleifend
        leo eget facilisis. Morbi at augue in felis ultrices vestibulum. Proin maximus metus ac ex dapibus volutpat. Sed eget massa id lectus ullamcorper mattis id id
        diam. Suspendisse arcu mi, tempor vel lacus vitae, interdum iaculis sapien. Nunc luctus rutrum diam.
      </p>
      <p>
        Donec porttitor erat tincidunt tempor venenatis. Sed interdum pharetra bibendum. Cras auctor lorem lacus, non convallis lectus iaculis vel. Ut fermentum felis a
        mauris pulvinar, nec laoreet tellus porttitor. Nulla nunc quam, porttitor vel ipsum eget, luctus congue nunc. Ut lectus leo, malesuada et porta nec, luctus vel
        risus. Integer porttitor cursus massa id gravida. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras ac suscipit risus,
        a pharetra turpis. Nunc lectus dolor, suscipit non tellus vel, facilisis posuere nunc. Maecenas vestibulum a nibh vitae mollis. Etiam condimentum sit amet turpis
        at congue. Nulla ac fringilla tellus. Nulla a justo sed lorem elementum feugiat. Mauris sollicitudin lacus vitae posuere imperdiet. Curabitur in metus ut quam
        facilisis maximus.
      </p>
      <p>
        Nunc convallis arcu sollicitudin metus molestie, pharetra lacinia felis tempus. Cras pretium faucibus enim, elementum rhoncus libero faucibus ac. Nullam facilisis
        dolor vel purus molestie, ut hendrerit est ornare. Vestibulum blandit consectetur enim vitae blandit. Vestibulum ante ipsum primis in faucibus orci luctus et
        ultrices posuere cubilia Curae; Nam pretium justo sem, quis malesuada risus lobortis eget. Curabitur pretium turpis vitae odio gravida ultricies. Integer risus
        orci, convallis non magna at, pharetra euismod quam. Donec scelerisque mollis tempor. Quisque placerat auctor quam nec condimentum. Donec nec lacinia turpis.
        Nulla eu leo id urna porta aliquet. Sed tempor, nisi ullamcorper tincidunt dapibus, dolor neque vehicula tortor, viverra elementum dolor justo eu metus. Fusce
        eget viverra nunc, luctus facilisis neque.
      </p>
    </Fragment>
  )
}

storiesOf('Scroll Container', module)
  .add('Vertical', () => (
    <ScrollContainer className='scroll-container'>
      <Copy />
      <ExpandableChild />
    </ScrollContainer>
  ))
  .add('Horizontal', () => (
    <ScrollContainer className='scroll-container scroll-container-horizontal'>
      <Copy />
    </ScrollContainer>
  ))

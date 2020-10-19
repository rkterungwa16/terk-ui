import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SCROLL_BOX_MIN_HEIGHT = 20;

const Container = styled.div`
  position: relative;
  height: 100%;
`;

const ScrollHost = styled.div`
  overflow: auto;
  height: 100%;
  -ms-overflow-style: none;
  position: relative;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ScrollBar = styled.div.attrs((props) => ({
  hovering: props.hovering,
}))`
  width: 10px;
  height: 100%;
  right: 0;
  top: 0px;
  position: absolute;
  border-radius: 7px;
  bottom: 0px;
  background-color: rgba(0, 0, 0, 0.35);
  opacity: ${(props) => (props.hovering ? 1 : 0)};
`;

ScrollBar.propTypes = {
  hovering: PropTypes.bool,
};

const ScrollThumb = styled.div.attrs((props) => ({
  style: {
    height: props.height,
    top: props.top,
  },
}))`
  width: 8px;
  margin-left: 1px;
  position: absolute;
  border-radius: 7px;
  opacity: 1;
  top: 0;
  background-color: rgba(0, 0, 0, 0.55);
`;

ScrollThumb.propTypes = {
  height: PropTypes.number,
  top: PropTypes.number,
};

const Scrollbar = (props) => {
  const [hovering, setHovering] = React.useState(false);
  const [scrollBoxHeight, setScrollBoxHeight] = React.useState(
    SCROLL_BOX_MIN_HEIGHT
  );

  const [scrollBoxTop, setScrollBoxTop] = React.useState(0);
  const [lastScrollThumbPosition, setScrollThumbPosition] = React.useState(0);
  const [isDragging, setDragging] = React.useState(false);

  const handleMouseOver = React.useCallback(() => {
    !hovering && setHovering(true);
  }, [hovering]);

  const handleMouseOut = React.useCallback(() => {
    !!hovering && setHovering(false);
  }, [hovering]);

  const handleDocumentMouseUp = React.useCallback(
    (e) => {
      if (isDragging) {
        e.preventDefault();
        setDragging(false);
      }
    },
    [isDragging]
  );

  const handleDocumentMouseMove = React.useCallback(
    (e) => {
      if (isDragging) {
        e.preventDefault();
        e.stopPropagation();
        const scrollHostElement = scrollHostRef.current;
        const { scrollHeight, offsetHeight } = scrollHostElement;

        let deltaY = e.clientY - lastScrollThumbPosition;
        let percentage = deltaY * (scrollHeight / offsetHeight);

        setScrollThumbPosition(e.clientY);
        setScrollBoxTop(
          Math.min(
            Math.max(0, scrollBoxTop + deltaY),
            offsetHeight - scrollBoxHeight
          )
        );
        scrollHostElement.scrollTop = Math.min(
          scrollHostElement.scrollTop + percentage,
          scrollHeight - offsetHeight
        );
      }
    },
    [isDragging, lastScrollThumbPosition, scrollBoxHeight, scrollBoxTop]
  );

  const handleScrollThumbMouseDown = React.useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setScrollThumbPosition(e.clientY);
    setDragging(true);
  }, []);

  const handleScroll = React.useCallback(() => {
    if (!scrollHostRef) {
      return;
    }
    const scrollHostElement = scrollHostRef.current;
    const { scrollTop, scrollHeight, offsetHeight } = scrollHostElement;

    let newTop =
      (parseInt(scrollTop, 10) / parseInt(scrollHeight, 10)) * offsetHeight;
    newTop = Math.min(newTop, offsetHeight - scrollBoxHeight);
    setScrollBoxTop(newTop);
  }, []);

  const scrollHostRef = React.useRef();

  React.useEffect(() => {
    const scrollHostElement = scrollHostRef.current;
    const { clientHeight, scrollHeight } = scrollHostElement;
    const scrollThumbPercentage = clientHeight / scrollHeight;
    const scrollThumbHeight = Math.max(
      scrollThumbPercentage * clientHeight,
      SCROLL_BOX_MIN_HEIGHT
    );
    setScrollBoxHeight(scrollThumbHeight);
    scrollHostElement.addEventListener("scroll", handleScroll, true);
    return function cleanup() {
      scrollHostElement.removeEventListener("scroll", handleScroll, true);
    };
  }, []);

  React.useEffect(() => {
    document.addEventListener("mousemove", handleDocumentMouseMove);
    document.addEventListener("mouseup", handleDocumentMouseUp);
    document.addEventListener("mouseleave", handleDocumentMouseUp);
    return function cleanup() {
      document.removeEventListener("mousemove", handleDocumentMouseMove);
      document.removeEventListener("mouseup", handleDocumentMouseUp);
      document.removeEventListener("mouseleave", handleDocumentMouseUp);
    };
  }, [handleDocumentMouseMove, handleDocumentMouseUp]);
  return (
    <Container onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <ScrollHost ref={scrollHostRef}>{props.children}</ScrollHost>
      <ScrollBar hovering={hovering}>
        <ScrollThumb
          onMouseDown={handleScrollThumbMouseDown}
          top={scrollBoxTop}
          height={scrollBoxHeight}
        />
      </ScrollBar>
    </Container>
  );
};

Scrollbar.propTypes = {
  children: PropTypes.node,
};

export default Scrollbar;

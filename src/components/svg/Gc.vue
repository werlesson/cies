<template>
  <div class="svg-image">
    <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="gc">
        <path
          id="gc-up"
          d="M500 250C500 388.071 388.071 500 250 500C183.674 500 123.38 474.171 78.6287 432.023L163.692 372.535C188.081 389.946 217.857 400.177 250 400.177C310.478 400.177 362.577 363.959 386.173 311.837H250.896L394.915 211.303C394.912 211.291 394.909 211.279 394.906 211.267L479.959 151.76C492.859 181.917 500 215.124 500 250Z"
          fill="#b01ba5"
        />
        <path
          id="gc-down"
          d="M456.127 108.497L374.26 164.919C347.391 124.59 301.765 98.0565 250 98.0565C167.355 98.0565 100.358 165.688 100.358 249.117C100.358 281.016 110.153 310.605 126.872 334.988L44.5218 392.443C16.452 352.027 0 302.935 0 250C0 111.929 111.929 0 250 0C335.546 0 411.056 42.9667 456.127 108.497Z"
          fill="#b01ba5"
        />
      </g>
    </svg>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
svg {
  width: 24px;
}

.svg-image {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  &:hover {
    transition: all 0.2s ease;
    background: #b01ba5;
    #gc {
      #gc-up {
        fill: #fff;
      }
      #gc-down {
        fill: #fff;
      }
    }
  }
}
</style>

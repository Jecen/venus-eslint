<template>
  <div>
    <div>{{message}}</div>
    <Col span='12'>
      <div class='des'>资源名: </div>
      <Input v-model='resourceName' placeholder='请输入搜索内容' style='width: 152px'>
      <Button type='ghost'>搜索</Button>
    </Col>
  </div>

</template>
# smart-community-system

> 记录关于系统模块的划分，以及每个模块相关的实体信息及相应功能

## 住户信息管理

#### 实体信息
* 户主信息：姓名、性别、身份证号、民族、政治面貌、手机号、工作单位、工作地址、入住时间、是否已婚、是否为户主
* 家庭成员：姓名、性别、身份证号、民族、政治面貌、手机号、工作单位、工作地址、是否已婚、是否为户主、与户主关系

#### 功能介绍
* 增加住户：添加住户位置、个人信息、家庭成员
* 修改住户信息：修改制定住户信息
* 删除住户：删除制定住户信息
* 查询住户信息：通过小区编号、单元号、房间号、户主姓名等查询住户信息
* 统计社区住户信息：如党员多少人，已婚多少人等等（首页图表展示）

## 房屋信息管理

#### 实体信息
* 小区信息：所属街道、所属物业
* 楼宇信息：所属小区、楼宇名称
* 单元信息：所属楼宇、单元名称
* 房间信息：所属单元、房间名称、房屋类型（门店、住宅）户主信息

#### 功能介绍
* 房屋信息 CURD
* 统计住宅多少间，门店多少间（图表展示）

## 财务管理

### 1. 物业费用管理

#### 实体信息
* 物业费用信息：房屋信息、户主姓名、应缴金额、收取时间、收取人员、付费方式、缴费状况

#### 功能介绍
* 物业费用信息的 CURD
* 生成清单导出 Excel

### 2. 停车费用管理

#### 实体信息
* 停车费用信息：房屋信息、户主姓名、应缴金额、收取时间、收取人员、付费方式、缴费状况

#### 功能介绍
* 停车费用信息的 CURD
* 生成清单导出 Excel

### 3. 支出费用管理

#### 实体信息
* 支出记录信息：支付原因、支付金额、支付人员、付款方式、支付时间

#### 功能介绍
* 支出记录信息的 CURD
* 生成清单导出 Excel

## 公共设施管理

### 1. 设施信息管理

#### 实体信息
* 设施信息：设施名称、承建商、电话、负责人、交付日期、设施管理人员、设施金额
* 使用人员信息：使用人员名称、使用时间、使用人数、使用状态

#### 功能介绍
* 设施信息的 CURD
* 生成清单导出

### 2. 设施使用管理

#### 实体信息
* 使用人员信息：使用人员名称、使用时间、使用人数、使用状态

#### 功能介绍
* 设施使用信息的 CURD
* 生成清单导出

### 3. 设施维护管理

#### 实体信息
* 设施维护信息：设施名称、维护人员姓名、电话、维护时间、维护费用、管理人员、维护说明

#### 功能介绍
* 设施维护信息的 CURD
* 生成清单导出

## 社区事件处理

####实体信息
* 事件信息：事件类型（街道清理、失物招领等）、上报时间、处理时间、处理状态（待处理、处理中、已处理）、处理人员、具体处理信息

#### 功能介绍
* 事件信息的 CURD
* 导出

## 外来人员登记

#### 实体信息
* 外来人员信息：姓名、性别、身份证号、年龄、时间、外来原因

#### 功能介绍
* 外来人员信息的 CURD
* 导出

## 发布公告

#### 实体信息
* 公告信息：标题、内容、公告类型、发布时间、发布人

#### 功能介绍
* 公告信息的 CURD

## 工作人员管理（超级管理员）

#### 实体信息
* 工作人员信息：登录账号、登录密码、姓名、性别、民族、身份证号、政治面貌、电话、职务、工作起始时间、状态（在职、离职）

#### 功能介绍
* 工作人员信息的 CURD
* 导出

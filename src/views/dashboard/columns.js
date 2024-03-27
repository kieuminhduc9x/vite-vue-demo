export default [
  {
    title: 'STT',
    dataIndex: 'rowIndex',
    scopedSlots: { customRender: 'rowIndex' },
    align: 'center',
    ellipsis: true,
    width: 50
  },
  {
    title: 'Tên nhân viên',
    dataIndex: 'NAME',
    scopedSlots: { customRender: 'NAME' },
    align: 'left',
    ellipsis: true,
    width: 200
  },
  {
    title: 'Tài khoản',
    dataIndex: 'USER_NAME',
    scopedSlots: { customRender: 'USER_NAME' },
    align: 'left',
    ellipsis: true,
    width: 150
  },
  {
    title: 'Chức vụ',
    dataIndex: 'DESCRIPTION',
    scopedSlots: { customRender: 'DESCRIPTION' },
    align: 'left',
    ellipsis: true,
    width: 180
  },
  {
    title: 'Bãi đỗ',
    dataIndex: 'TOLL_NAME',
    scopedSlots: { customRender: 'TOLL_NAME' },
    align: 'left',
    ellipsis: true,
    width: 120
  },
  {
    title: 'Trạng thái',
    dataIndex: 'STATUS',
    scopedSlots: { customRender: 'STATUS' },
    align: 'center',
    ellipsis: true,
    width: 120
  },
  {
    title: 'Thao tác',
    dataIndex: 'operation',
    scopedSlots: { customRender: 'operation' },
    width: 80,
    align: 'center'
  }
]

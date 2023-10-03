<template>
    <!-- 忘记密码 -->
    <el-dialog v-model="state.forgetPasswordDialog" title="忘记密码" width="400px">
        <el-form :model="formForgetPassword" :rules="rules" label-position="top">
            <el-form-item label="账号" prop="account">
                <el-input v-model="formForgetPassword.account" placeholder="请输入注册账号名" />
            </el-form-item>
            <el-form-item label="邮箱" prop="emile">
                <el-input v-model="formForgetPassword.emile" placeholder="请输入个人邮箱" />
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="state.forgetPasswordDialog = false">取消</el-button>
                <el-button type="primary" @click="openchangePassword">
                    下一步
                </el-button>
            </span>
        </template>
    </el-dialog>

    <!-- 修改密码 -->
    <el-dialog v-model="state.changePasswordDialog" title="修改密码" width="400px">
        <el-form :model="formForgetPassword" :rules="rules" label-position="top">
            <el-form-item label="密码" prop="password">
                <el-input v-model="formForgetPassword.password" placeholder="请输入新密码" />
            </el-form-item>
            <el-form-item label="重复密码" prop="repassword">
                <el-input v-model="formForgetPassword.repassword" placeholder="请再次输入新密码" />
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="state.changePasswordDialog = false">取消</el-button>
                <el-button type="primary" @click="openchangePassword">
                    确认
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script lang="ts" setup>
/* 导入模块区 */
import { reactive } from 'vue'


/* 表单数据和表单校验 */
interface formData {
    account: string,
    emile: string,
    password: string,
    repassword: string,
}
const formForgetPassword = reactive<formData>({
    account: '',
    emile: '',
    password: '',
    repassword: '',
})
const rules = reactive({
    account: [
        { required: true, min: 6, max: 12, message: '请输入注册账号', trigger: 'blur' }],
    emile: [
        { required: true, message: '请输入注册邮箱', trigger: 'blur' }],
    password: [
        { required: true, min: 6, max: 12, message: '请输入新密码', trigger: 'blur' }],
    repassword: [
        { required: true, min: 6, max: 12, message: '请再次输入新密码', trigger: 'blur' }],
})



/* 弹窗状态控制 */
const state = reactive({
    forgetPasswordDialog: false,
    changePasswordDialog: false,
})

const open = () => {
    state.forgetPasswordDialog = true
}

const openchangePassword = () => {
    state.forgetPasswordDialog = false
    state.changePasswordDialog = true
}
/* 导出的方法 */
defineExpose({
    open
})
</script>
<style scoped>
.el-button--text {
    margin-right: 15px;
}

.el-select {
    width: 300px;
}

.el-input {
    width: 300px;
}

.dialog-footer button:first-child {
    margin-right: 10px;
}
</style>
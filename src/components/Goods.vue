<style scoped>
    #cateid{
        font-size:.2rem;
        width:100%;
        overflow: hidden;
    }
    #cateid option{
        display: block;

    }
</style>
<template>
    <div>
        <div>
            <i class="fa fa-calendar-plus-o" style="color:red;"  aria-hidden="true"></i>
            <i class="fa fa-id-card" aria-hidden="true"></i>
            <div class="transition" >
                <div class="isrotating1">23223</div>
            </div>
        </div>
        <select name="cateid" id="cateid" onchange="selectcateid()" class="input">
            <option value="">请选择分类</option>
            <option value="68038">~~~~~~~绿色综合区~~~~~~~</option>
            <option value="68039">小号链接-1R一个/批量0.5</option>
            <option value="68041">补差价分类/1R一个/差多少补多少/非请勿拍/</option>
            <option value="68048">~~~~~~~自动锁定区~~~~~~~</option>
            <option value="79905">西F-赏金猎人/单板自瞄/系统支持/w7</option>
            <option value="79904">西F-天煞者稳定版/单板自瞄/系统支持/w7</option>
            <option value="79903">西F-千百变/显示位置/自动锁定/系统支持w7/w8/</option>
            <option value="74994">西F-百科版/显示位置/自动锁定/系统支持w7/w8/w10</option>
            <option value="68052">西F-大陆驱动版/人物驱动显示位置/吸附锁定目标/系统支持w7/w8/w10</option>
            <option value="68050">西F-终极火力版/显示位置/自动锁定/完美支持全系统</option>
            <option value="68049">西F-CMD稳定版/单板自瞄/系统支持/w7</option>
            <option value="68053">~~~~~~~显示位置区~~~~~~~</option>
            <option value="82161">西F-感叹号/方框透视/强悍稳定性/系统支持w7/w8</option>
            <option value="82160">西F-晨星版/方框透视/强悍稳定性/系统支持w7/w8</option>
            <option value="82159">西F-金凤凰/方框透视/强悍稳定性/系统支持w7/w8</option>
            <option value="81871">西F-神龙版/方框透视/强悍稳定性/系统支持w7/w8</option>
            <option value="81739">西F-魔龙版/方框透视/强悍稳定性/系统支持w7/w8</option>
            <option value="80270">西F-CT内部版/方框透视/强悍稳定性/系统支持w7/</option>
            <option value="79899">西F-符文版/方框透视/强悍稳定性/系统支持w7/w8</option>
            <option value="79897">西F-小内部/方框透视/强悍稳定性/系统支持w7/w8</option>
            <option value="79742">西F-小绵羊/人物透视/强悍稳定性/系统支持w7/w8</option>
            <option value="79448">西F-小精灵/方框透视/强悍稳定性/系统支持w7/w8</option>
            <option value="79039">西F-半夏版/方框透视/强悍稳定性/系统支持w7/w8</option>
            <option value="79034">西F-BOX版/方框透视/强悍稳定性/系统支持w7/w8</option>
            <option value="68059">西F-终极火力/单板显示/强悍稳定性/系统支持w7/w8/w10</option>
            <option value="79011">~~~~~~~变态功能区~~~~~~~</option>
            <option value="80847">西F-弛麟版/透视 自瞄 无后座 稳定枪王</option>
            <option value="79424">西F-七彩霓虹/透视 飞天 加速 卡无敌隐身 电锯秒杀 飞天遁地 无敌隐身 无限矮子雷等]</option>
            <option value="68047">西F-神话版/方框透视/自动瞄准/无后座力/空格飞天/子弹穿墙/系统支持w7/w8/w10</option>
            <option value="68060">~~~~~~~逆战软件区~~~~~~~</option>
            <option value="78975">逆战-大白菜/系统支持w7/w8</option>
            <option value="68065">逆战-魔魂版/系统支持w7/w8</option>
            <option value="68064">逆战-屠神版/系统支持w7/w8</option>
            <option value="79425">~~~~~~~灰车软件区~~~~~~~</option>
            <option value="79893">灰车-车神版/系统支持w7/w8/w10</option>
            <option value="79427">灰车-悍马版/系统支持w7/w8/w10</option>
            <option value="79426">灰车-哥斯拉/系统支持w7/w8/w10</option>
            <option value="77137">===============================================</option>
            <option value="77136">===============================================</option>
            <option value="77135">未更新禁止购买区/未更新禁止购买区/未更新禁止购买区/未更新禁止购买区</option>
            <option value="71283">未更新禁止购买区/未更新禁止购买区/未更新禁止购买区/未更新禁止购买区</option>
            <option value="77139">===============================================</option>
            <option value="77138">===============================================</option>
            <option value="80092">西F-TSG版/方框透视/强悍稳定性/系统支持w7/w8</option>
            <option value="79902">西F-怒火传奇/显示位置/自动锁定/系统支持w7/w8/</option>
            <option value="79898">西F-赤炎版版/方框透视/强悍稳定性/系统支持w7/w8</option>
            <option value="79896">西F-巴黎/人物透视/强悍稳定性/系统支持w7/w8</option>
            <option value="79895">西F-水精灵/方框透视/强悍稳定性/系统支持w7/w8</option>
            <option value="79449">西F-绝对程序/人物透视/强悍稳定性/系统支持w7/w8</option>
            <option value="79409">西F-凤鸣版/显示位置/自动锁定/系统支持w7/w8/w10</option>
            <option value="79026">西F-DER版/显示位置/自动锁定/系统支持w7/w8/w10</option>
            <option value="79012">西F-云霄版/透视 飞天 加速 卡空 卡手臂 无敌隐身等]</option>
            <option value="78979">西F-E X 版/方框透视/强悍稳定性/系统支持w7/w8</option>
            <option value="78964">西F-金凤凰/方框透视/强悍稳定性/系统支持w7/w8</option>
            <option value="78909">西F-清魂版/显示位置/自动锁定/系统支持w7/w8/w10</option>
            <option value="78849">西F-长方形/方框透视/强悍稳定性/系统支持w7/w8</option>
            <option value="78693">西F-蘑菇版/方框透视/强悍稳定性/系统支持w7/w8</option>
            <option value="78680">西F-傲世版/方框透视/强悍稳定性/系统支持w7/w8</option>
            <option value="77555">西F-鬼火版/单板显示/强悍稳定性/系统支持w7/w8/w10</option>
            <option value="77554">西F-鬼火版/显示位置/自动锁定/系统支持w7/w8/w10</option>
            <option value="77134">西F-先知版/显示位置/自动锁定/系统支持w7/w8/w10</option>
            <option value="75012">逆战-神马版/系统支持w7/w8</option>
            <option value="75011">逆战-半月版/系统支持w7/w8</option>
            <option value="75010">逆战-天山版/系统支持w7/w8</option>
            <option value="75009">逆战-嗨啸版/系统支持w7/w8</option>
            <option value="75008">逆战-毒蝎版/系统支持w7/w8</option>
            <option value="75007">西F-旺旺版/方框透视/强悍稳定性/系统支持w7/w8</option>
            <option value="75006">1</option>
            <option value="75005">西F-牡丹版/方框透视/强悍稳定性/系统支持w7/w8</option>
            <option value="75004">1</option>
            <option value="75003">西F-小黄鸭/方框透视/强悍稳定性/系统支持w7/w8</option>
            <option value="75002">西F-金凤凰版/方框透视/强悍稳定性/系统支持w7/w8 （等待更新）</option>
            <option value="75001">西F-极光版/方框透视/强悍稳定性/系统支持w7/w8</option>
            <option value="75000">西F-Good版/人物透视/强悍稳定性/系统支持w7/w8</option>
            <option value="74999">西F-D3D版/人物透视/强悍稳定性/系统支持w7/w8</option>
            <option value="74998">西F-七夜版/方框透视/强悍稳定性/系统支持w7/w8</option>
            <option value="74997">西F-武圣版/方框透视/强悍稳定性/系统支持w7/w8</option>
            <option value="74996">西F-加菲猫版/人物透视/自动锁定/系统支持w7/w8</option>
            <option value="74995">1</option>
            <option value="74993">西F-光芒版/显示位置/自动锁定/系统支持w7/w8</option>
            <option value="74992">西F-阿狸版/显示位置/自动锁定/系统支持w7/w8</option>
            <option value="74991">西F-七悦版/显示位置/自动锁定/系统支持w7/w8/w10</option>
            <option value="74990">西F-盗梦者版/显示位置/自动锁定/系统支持w7/w8</option>
            <option value="74989">西F-天使之翼/透视自瞄/无后座力/变态功能/系统支持w7/w8</option>
            <option value="74987">西F-神祭/透视自瞄/无后座力/变态功能/系统支持w7/w8</option>
            <option value="74986">西F-千机变/透视自瞄/无后座力/变态功能/系统支持w7/w8</option>
            <option value="74985">F车-鼎盛瞬移版/影子版/系统支持w7/w8</option>
            <option value="72788">西F-先知版/单板显示/强悍稳定性/系统支持w7/w8/w10</option>
            <option value="72784">西F-神龙版/单板显示/强悍稳定性/系统支持w7/w8/w10</option>
            <option value="71282">西F-奇一版/单板显示/强悍稳定性/系统支持w7/w8/w10</option>
            <option value="71281">西F-天降自瞄版/显示位置/自动锁定/完美支持w7/w8/XP</option>
            <option value="68094">F车-冰狐瞬移版/影子版/系统支持w7/w8</option>
            <option value="68068">逆战-睡莲版/系统支持w7/w8</option>
            <option value="68067">逆战-天梯版/系统支持w7/w8</option>
            <option value="68066">泥战-双子版/系统支持w7/w8</option>
            <option value="68063">泥战-小Q版/系统支持w7</option>
            <option value="68062">逆战-天神版/系统支持w7/w8</option>
            <option value="68061">西F-星星版/单板显示/强悍稳定性/系统支持w7/w8/w10</option>
            <option value="68058">西F-悦动版/单板显示/强悍稳定性/系统支持w7/w8/w10</option>
            <option value="68056">西F-火焰版/单板显示/强悍稳定性/系统支持w7/w8/w10</option>
            <option value="68055">西F-逆天版/单板显示/强悍稳定性/系统支持w7/w8/w10</option>
            <option value="68054">西F-蓝龙版/单板显示/强悍稳定性/系统支持w7/w8/w10</option>
        </select>
    </div>
</template>
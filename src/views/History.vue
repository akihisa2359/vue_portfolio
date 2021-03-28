<template>
    <div class="history">
         <v-parallax dark height="1500" src="../assets/autumn-studio-PaM7SD5wM6g-unsplash.jpg">
        <!-- スマホの文字の表示スペースを確保するためにpl-0 -->
         <v-container class="pl-0">
            <h1 class= "text-center mt-0 pt-4">History</h1>
            <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
                <v-timeline-item v-for="(item, i) in items" :key="i"
                    :color="item.color"
                    :icon="item.icon"
                    fill-dot
                >
                    <v-lazy
                        :options="{
                        threshold: .5
                        }"
                        min-height="200"
                        transition="fade-transition"
                    >
                        <div>
                            <v-card :color="item.color" dark>
                                <v-card-title class="title text-subtitle-1 text-sm-h5">{{ item.title }}</v-card-title>
                                <v-card-text class="white text--primary pt-4">
                                    <p class="text-subtitle-2 text-sm-h6">{{ item.subtitle }}</p>
                                    <p class="ml-2 text-caption text-sm-body-1">{{ item.text }}</p>
                                </v-card-text>
                            </v-card>
                            <v-list dense color="transparent">
                                <v-list-item-group color="primary">
                                    <v-list-item class="pl-3" v-for="(detail, index) in item.details" :key="index">
                                        <v-list-item-icon class="mr-0">
                                            <v-icon class="white--text text-body-2" v-text="'mdi-minus'"></v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-content>
                                            <v-list-item-title class="white--text detail font-weight-bold">{{ detail }}</v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list-item-group>
                            </v-list>
                        </div>
                    </v-lazy>
                </v-timeline-item>
            </v-timeline>
         </v-container>
         </v-parallax>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    color: 'red lighten-2',
                    icon: 'mdi-star',
                    title: 'High Shool 2011-2014',
                    subtitle: '大阪府立池田高等学校',
                    text: '部活と時に勉学に励む無難な学生生活を過ごす。',
                    details:  ['バスケットボール部に所属 2011-2012', '退部し、アメフト部に所属 2012-']
                },
                {
                    color: 'red lighten-2',
                    icon: 'mdi-star',
                    title: 'University 2014-2018',
                    subtitle: '関西大学 外国語学部',
                    text: 'サークルには所属せずジムに通い詰める。また、学部のカリキュラムでアメリカに留学し、ジムに通い詰める。',
                    details: ['慣れない英語の授業に苦難 2014', 'アメリカに留学 2015', 'ベンチプレス95kg記録 2016', 'TOEIC 920点取得 2017']
                },
                {
                    color: 'red lighten-2',
                    icon: 'mdi-star',
                    title: 'Company 2018-2019',
                    subtitle: 'SIerの会社',
                    text: 'C言語とC++の研修を終えた後、C#で業務ツールを作成する。',
                    details: []
                },
                {
                    color: 'red lighten-2',
                    icon: 'mdi-star',
                    title: 'Company 2019-',
                    subtitle: '人材系の会社',
                    text: '社内SEとして業務系ツールの作成、WEBアプリの開発、期間システムの調整を行う',
                    details: ['初めてのWEB系言語(PHP) 2019', '慣れないgitに大苦戦 2019', 'フロントエンドの勉強開始 2020', 'Pythonに着手 2020', 'Vueに着手 2021']
                }
            ],
        }
    }
}
</script>

<style scoped>
@media screen and (max-width: 480px) {
    .detail {
        font-size: 10px !important;
    }
}
</style>
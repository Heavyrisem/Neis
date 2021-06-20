interface DefaultResponse {
    /** 시도교육청코드 */
    ATPT_OFCDC_SC_CODE: string
    /** 시도교육청명 */
    ATPT_OFCDC_SC_NM: string
    /** 표준학교코드 */
    SD_SCHUL_CODE: number
}

enum SchoolKind {
    SPEC = "특수학교",
    ELEM = "초등학교",
    MIDDLE = "중학교",
    HIGH = "고등학교",
    HIGH_CIVIC = "고등공민학교",
    HIGH_TECH = "고등기술학교",
    MISC = "각종학교",
    FOREGIN = "외국인학교",
    OVERSEA_ELEM = "재외한국인학교(초)",
    OVERSEA_MIDDLE = "재외한국인학교(중)",
    OVERSEA_HIGH = "재외한국인학교(고)",
    PUBLIC_TRAIN = "공동실습소"
}

enum HighSchoolType {
    NORMAL = "일반고",
    SPEC_A = "특성화고",
    SPEC_B = "특목고",
    AUTONOMOUS = "자율고"
}

interface schoolInfoResponse extends DefaultResponse {
    /** 학교명 */
    SCHUL_NM: string
    /** 영문학교명 */
    ENG_SCHUL_NM: string
    /** 학교종류명 */
    SCHUL_KND_SC_NM: SchoolKind
    /** 소재지명 */
    LCTN_SC_NM: string
    /** 관할조직명 */
    JU_ORG_NM: string
    /** 설립명 */
    FOND_SC_NM: "공립" | "사립"
    /** 도로명우편번호 */
    ORG_RDNZC: number
    /** 도로명주소 */
    ORG_RDNMA: string
    /** 도로명상세주소 */
    ORG_RDNDA: string
    /** 전화번호 */
    ORG_TELNO: string
    /** 홈페이지주소 */
    HMPG_ADRES: string
    /** 남녀공학구분명 */
    COEDU_SC_NM: "남여공학" | "여" | "남"
    /** 팩스번호 */
    ORG_FAXNO: string
    /** 고등학교구분명 */
    HS_SC_NM: null | HighSchoolType
    /** 산업체특별학급존재여부 */
    INDST_SPECL_CCCCL_EXST_YN: "Y" | "N"
    /** 고등학교일반실업구분명 */
    HS_GNRL_BUSNS_SC_NM: "일반계" | "해당없음"
    /** 특수목적고등학교계열명 */
    SPCLY_PURPS_HS_ORD_NM: null | string
    /** 입시전후기구분명 */
    ENE_BFE_SEHF_SC_NM: "전기" | "후기"
    /** 주야구분명 */
    DGHT_SC_NM: "주간" | "야간"
    /** 설립일자 */
    FOND_YMD: number
    /** 개교기념일 */
    FOAS_MEMRD: number
    /** 수정일 */
    LOAD_DTM: number
}
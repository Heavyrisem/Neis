
interface DefaultRequestParams {
    /** 인증키 */
    KEY: string
    /** 호출 문서 */
    Type: 'xml' | 'json'
    /** 페이지 위치 */
    pIndex: number
    /** 페이지 당 신청 숫자 */
    pSize: number
}


export interface schoolInfoParams extends DefaultRequestParams {
    /** 시도교육청코드 */
    ATPT_OFCDC_SC_CODE?: string
    /** 표준학교코드 */
    SD_SCHUL_CODE?: string
    /** 학교명 */
    SCHUL_NM?: string
    /** 학교종류명 */
    SCHUL_KND_SC_NM?: string
    /** 소재지명 */
    LCTN_SC_NM?: string
    /** 설립명 */
    FOND_SC_NM?: string
}